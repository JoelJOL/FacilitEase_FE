import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2adminComponent } from './l2admin.component';

describe('L2adminComponent', () => {
  let component: L2adminComponent;
  let fixture: ComponentFixture<L2adminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2adminComponent]
    });
    fixture = TestBed.createComponent(L2adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
