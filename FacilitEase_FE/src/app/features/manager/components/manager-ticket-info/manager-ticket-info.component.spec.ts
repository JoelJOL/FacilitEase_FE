import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTicketInfoComponent } from './manager-ticket-info.component';

describe('ManagerTicketInfoComponent', () => {
  let component: ManagerTicketInfoComponent;
  let fixture: ComponentFixture<ManagerTicketInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTicketInfoComponent]
    });
    fixture = TestBed.createComponent(ManagerTicketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
