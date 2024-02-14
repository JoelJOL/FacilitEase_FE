import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2AdminComponent } from './l2admin.component';

describe('L2AdminComponent', () => {
  let component: L2AdminComponent;
  let fixture: ComponentFixture<L2AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2AdminComponent],
    });
    fixture = TestBed.createComponent(L2AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
