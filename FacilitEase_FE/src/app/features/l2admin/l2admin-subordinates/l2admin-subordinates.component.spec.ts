import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2adminSubordinatesComponent } from './l2admin-subordinates.component';

describe('L2adminSubordinatesComponent', () => {
  let component: L2adminSubordinatesComponent;
  let fixture: ComponentFixture<L2adminSubordinatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2adminSubordinatesComponent]
    });
    fixture = TestBed.createComponent(L2adminSubordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
