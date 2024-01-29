import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMyTicketsComponent } from './employee-my-tickets.component';

describe('EmployeeMyTicketsComponent', () => {
  let component: EmployeeMyTicketsComponent;
  let fixture: ComponentFixture<EmployeeMyTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeMyTicketsComponent]
    });
    fixture = TestBed.createComponent(EmployeeMyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
