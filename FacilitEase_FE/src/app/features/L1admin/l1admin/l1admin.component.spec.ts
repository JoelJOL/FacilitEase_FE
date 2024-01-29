import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1adminComponent } from './l1admin.component';

describe('L1adminComponent', () => {
  let component: L1adminComponent;
  let fixture: ComponentFixture<L1adminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L1adminComponent]
    });
    fixture = TestBed.createComponent(L1adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
