import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAssetToEmployeeComponent } from './assign-asset-to-employee.component';

describe('AssignAssetToEmployeeComponent', () => {
  let component: AssignAssetToEmployeeComponent;
  let fixture: ComponentFixture<AssignAssetToEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignAssetToEmployeeComponent]
    });
    fixture = TestBed.createComponent(AssignAssetToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
