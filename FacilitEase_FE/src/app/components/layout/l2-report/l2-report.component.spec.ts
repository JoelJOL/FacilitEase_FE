import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2ReportComponent } from './l2-report.component';

describe('L2ReportComponent', () => {
  let component: L2ReportComponent;
  let fixture: ComponentFixture<L2ReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2ReportComponent]
    });
    fixture = TestBed.createComponent(L2ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
