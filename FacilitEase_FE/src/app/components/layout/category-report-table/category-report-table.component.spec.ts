import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReportTableComponent } from './category-report-table.component';

describe('CategoryReportTableComponent', () => {
  let component: CategoryReportTableComponent;
  let fixture: ComponentFixture<CategoryReportTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryReportTableComponent]
    });
    fixture = TestBed.createComponent(CategoryReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
