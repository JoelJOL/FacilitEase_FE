import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineButtonComponent } from './accept-decline-button.component';

describe('AcceptDeclineButtonComponent', () => {
  let component: AcceptDeclineButtonComponent;
  let fixture: ComponentFixture<AcceptDeclineButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptDeclineButtonComponent]
    });
    fixture = TestBed.createComponent(AcceptDeclineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
