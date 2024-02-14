import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketInfoComponent } from './ticket-info.component';
import { BsModalService } from 'ngx-bootstrap/modal';

describe('TicketInfoComponent', () => {
  let component: TicketInfoComponent;
  let fixture: ComponentFixture<TicketInfoComponent>;

  // Create a mock for BsModalService
  const modalServiceMock = {
    show: jasmine.createSpy('show')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketInfoComponent],
      providers: [
        { provide: BsModalService, useValue: modalServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return correct color based on ticket priority', () => {
    // Test for 'Critical' priority
    component.ticketDetails = { priorityName: 'Critical' };
    expect(component.getPriorityColor()).toBe('darkred');

    // Test for 'High' priority
    component.ticketDetails = { priorityName: 'High' };
    expect(component.getPriorityColor()).toBe('red');

    // Test for 'Medium' priority
    component.ticketDetails = { priorityName: 'Medium' };
    expect(component.getPriorityColor()).toBe('orange');

    // Test for 'Low' priority
    component.ticketDetails = { priorityName: 'Low' };
    expect(component.getPriorityColor()).toBe('green');

    // Test for invalid priority
    component.ticketDetails = { priorityName: 'Invalid' };
    expect(component.getPriorityColor()).toBe('black');
  });
});
