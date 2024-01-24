import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseTicketTitleComponent } from './raise-ticket-title.component';

describe('RaiseTicketTitleComponent', () => {
  let component: RaiseTicketTitleComponent;
  let fixture: ComponentFixture<RaiseTicketTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaiseTicketTitleComponent]
    });
    fixture = TestBed.createComponent(RaiseTicketTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
