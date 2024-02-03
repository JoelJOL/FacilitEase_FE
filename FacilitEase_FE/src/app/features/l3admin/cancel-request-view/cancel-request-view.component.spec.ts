import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRequestViewComponent } from './cancel-request-view.component';

describe('CancelRequestViewComponent', () => {
  let component: CancelRequestViewComponent;
  let fixture: ComponentFixture<CancelRequestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelRequestViewComponent]
    });
    fixture = TestBed.createComponent(CancelRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
