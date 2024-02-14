import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToCancelComponent } from './request-to-cancel.component';

describe('RequestToCancelComponent', () => {
  let component: RequestToCancelComponent;
  let fixture: ComponentFixture<RequestToCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestToCancelComponent],
    });
    fixture = TestBed.createComponent(RequestToCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
