import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNaSimpleComponent } from './ticket-na-simple.component';

describe('TicketNaSimpleComponent', () => {
  let component: TicketNaSimpleComponent;
  let fixture: ComponentFixture<TicketNaSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketNaSimpleComponent]
    });
    fixture = TestBed.createComponent(TicketNaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
