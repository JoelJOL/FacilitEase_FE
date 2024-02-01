import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStatsComponent } from './report-stats.component';

describe('ReportStatsComponent', () => {
  let component: ReportStatsComponent;
  let fixture: ComponentFixture<ReportStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportStatsComponent]
    });
    fixture = TestBed.createComponent(ReportStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
