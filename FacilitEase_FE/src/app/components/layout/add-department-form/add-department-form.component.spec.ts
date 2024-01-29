import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentFormComponent } from './add-department-form.component';

describe('AddDepartmentFormComponent', () => {
  let component: AddDepartmentFormComponent;
  let fixture: ComponentFixture<AddDepartmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepartmentFormComponent]
    });
    fixture = TestBed.createComponent(AddDepartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
