import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPorfileComponent } from './report-porfile.component';

describe('ReportPorfileComponent', () => {
  let component: ReportPorfileComponent;
  let fixture: ComponentFixture<ReportPorfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportPorfileComponent]
    });
    fixture = TestBed.createComponent(ReportPorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
