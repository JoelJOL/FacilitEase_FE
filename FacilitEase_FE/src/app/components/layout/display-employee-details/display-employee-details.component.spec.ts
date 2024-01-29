import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeeDetailsComponent } from './display-employee-details.component';

describe('DisplayEmployeeDetailsComponent', () => {
  let component: DisplayEmployeeDetailsComponent;
  let fixture: ComponentFixture<DisplayEmployeeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayEmployeeDetailsComponent]
    });
    fixture = TestBed.createComponent(DisplayEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
