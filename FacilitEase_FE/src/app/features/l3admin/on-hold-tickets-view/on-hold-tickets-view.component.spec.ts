import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoldTicketsViewComponent } from './on-hold-tickets-view.component';

describe('OnHoldTicketsViewComponent', () => {
  let component: OnHoldTicketsViewComponent;
  let fixture: ComponentFixture<OnHoldTicketsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnHoldTicketsViewComponent]
    });
    fixture = TestBed.createComponent(OnHoldTicketsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
