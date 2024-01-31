import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentheadComponent } from './departmenthead.component';

describe('DepartmentheadComponent', () => {
  let component: DepartmentheadComponent;
  let fixture: ComponentFixture<DepartmentheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentheadComponent]
    });
    fixture = TestBed.createComponent(DepartmentheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
