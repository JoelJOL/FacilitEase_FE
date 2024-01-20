import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInfoComponent } from './ticket-info.component';

describe('TicketInfoComponent', () => {
  let component: TicketInfoComponent;
  let fixture: ComponentFixture<TicketInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketInfoComponent]
    });
    fixture = TestBed.createComponent(TicketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
