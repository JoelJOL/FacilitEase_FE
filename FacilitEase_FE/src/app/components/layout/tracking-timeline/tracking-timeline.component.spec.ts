import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingTimelineComponent } from './tracking-timeline.component';

describe('TrackingTimelineComponent', () => {
  let component: TrackingTimelineComponent;
  let fixture: ComponentFixture<TrackingTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingTimelineComponent]
    });
    fixture = TestBed.createComponent(TrackingTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
