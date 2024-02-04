import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRequestViewAllComponent } from './cancel-request-view-all.component';

describe('CancelRequestViewAllComponent', () => {
  let component: CancelRequestViewAllComponent;
  let fixture: ComponentFixture<CancelRequestViewAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelRequestViewAllComponent]
    });
    fixture = TestBed.createComponent(CancelRequestViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
