import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelRequestViewAllComponent } from './cancel-request-view-all.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataTableNewComponent } from '@app/components/layout/data-table-new/data-table-new.component';

describe('CancelRequestViewAllComponent', () => {
  let component: CancelRequestViewAllComponent;
  let fixture: ComponentFixture<CancelRequestViewAllComponent>;
  let agentServiceSpy: jasmine.SpyObj<AgentService>;
  let router: Router;

  beforeEach(() => {
    agentServiceSpy = jasmine.createSpyObj('AgentService', ['getAllCancelRequestTickets']);
    
    TestBed.configureTestingModule({
      declarations: [
        CancelRequestViewAllComponent,
        DataTableNewComponent // Include the DataTableNewComponent here
      ],
      providers: [
        { provide: AgentService, useValue: agentServiceSpy },
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule // Import HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA], // Add NO_ERRORS_SCHEMA if needed
    });
    
    fixture = TestBed.createComponent(CancelRequestViewAllComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set apiLink from AgentService on ngOnInit', () => {
    // Arrange
    const expectedApiLink = 'test-api-link';
    agentServiceSpy.getAllCancelRequestTickets.and.returnValue(expectedApiLink);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.apiLink).toEqual(expectedApiLink);
  });

  it('should navigate to detail route when onRowClicked is called', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const testTicketId = 123;

    // Act
    component.onRowClicked(testTicketId);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['l3admin/request-to-cancel-detail', testTicketId]);
  });
});
