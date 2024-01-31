import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadDataTableComponent } from './department-head-data-table.component';

describe('DepartmentHeadDataTableComponent', () => {
  let component: DepartmentHeadDataTableComponent;
  let fixture: ComponentFixture<DepartmentHeadDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentHeadDataTableComponent]
    });
    fixture = TestBed.createComponent(DepartmentHeadDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
