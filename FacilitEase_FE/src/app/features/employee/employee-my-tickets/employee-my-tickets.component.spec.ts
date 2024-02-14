import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeMyTicketsComponent } from './employee-my-tickets.component';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmployeeMyTicketsComponent', () => {
  let component: EmployeeMyTicketsComponent;
  let fixture: ComponentFixture<EmployeeMyTicketsComponent>;
  let dropDownServiceSpy: jasmine.SpyObj<DropDownService>;
  let router: Router;

  beforeEach(() => {
    dropDownServiceSpy = jasmine.createSpyObj('DropDownService', [
      'getMyTickets',
    ]);

    TestBed.configureTestingModule({
      declarations: [EmployeeMyTicketsComponent],
      providers: [{ provide: DropDownService, useValue: dropDownServiceSpy }],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(EmployeeMyTicketsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    // Arrange & Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should set apiLink from DropDownService', () => {
    // Arrange
    const expectedApiLink = 'test-api-link';
    dropDownServiceSpy.getMyTickets.and.returnValue(expectedApiLink);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.apiLink).toEqual(expectedApiLink);
  });

  it('should navigate to ticket form when raiseTicket is called', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');

    // Act
    component.raiseTicket();

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['employee/form']);
  });

  it('should navigate to detailed view when onRowClicked is called', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const testTicketId = 456;

    // Act
    component.onRowClicked(testTicketId);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith([
      'employee/request',
      testTicketId,
    ]);
  });
});
