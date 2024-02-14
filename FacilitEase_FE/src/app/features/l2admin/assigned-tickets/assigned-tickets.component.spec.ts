import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTicketsComponent } from './assigned-tickets.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';

describe('AssignedTicketsComponent', () => {
  let component: AssignedTicketsComponent;
  let fixture: ComponentFixture<AssignedTicketsComponent>;
  let masterServiceSpy: jasmine.SpyObj<MasterService>;
  let sidebarServiceSpy: jasmine.SpyObj<SidebarService>;

  beforeEach(() => {
    masterServiceSpy = jasmine.createSpyObj('MasterService', [
      'getApiLinkAssigned',
    ]);
    sidebarServiceSpy = jasmine.createSpyObj('SidebarService', ['']);

    TestBed.configureTestingModule({
      declarations: [AssignedTicketsComponent],
      providers: [
        { provide: MasterService, useValue: masterServiceSpy },
        { provide: SidebarService, useValue: sidebarServiceSpy },
      ],
      imports: [RouterTestingModule], // Import RouterTestingModule for testing navigation
      schemas: [NO_ERRORS_SCHEMA], // Add NO_ERRORS_SCHEMA
    });

    fixture = TestBed.createComponent(AssignedTicketsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange & Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should set apiLink from MasterService', () => {
    // Arrange
    const expectedApiLink = 'test-api-link';
    masterServiceSpy.getApiLinkAssigned.and.returnValue(expectedApiLink);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.apiLink).toEqual(expectedApiLink);
  });

  it('should navigate to ticket view when onRowClicked is called', () => {
    // Arrange
    const navigateSpy = spyOn(TestBed.inject(Router), 'navigate');
    const testTicketId = 123;

    // Act
    component.onRowClicked(testTicketId);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith([
      'l2admin/details-assigned',
      testTicketId,
    ]);
  });
});
