import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingModalComponent } from './tracking-modal.component';

describe('TrackingModalComponent', () => {
  let component: TrackingModalComponent;
  let fixture: ComponentFixture<TrackingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingModalComponent]
    });
    fixture = TestBed.createComponent(TrackingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
