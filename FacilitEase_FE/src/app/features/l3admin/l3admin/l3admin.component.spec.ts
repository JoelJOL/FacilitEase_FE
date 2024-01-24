import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3adminComponent } from './l3admin.component';

describe('L3adminComponent', () => {
  let component: L3adminComponent;
  let fixture: ComponentFixture<L3adminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L3adminComponent]
    });
    fixture = TestBed.createComponent(L3adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
