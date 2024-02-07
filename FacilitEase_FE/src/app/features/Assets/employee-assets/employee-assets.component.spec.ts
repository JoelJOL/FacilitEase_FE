import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssetsComponent } from './employee-assets.component';

describe('EmployeeAssetsComponent', () => {
  let component: EmployeeAssetsComponent;
  let fixture: ComponentFixture<EmployeeAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAssetsComponent]
    });
    fixture = TestBed.createComponent(EmployeeAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
