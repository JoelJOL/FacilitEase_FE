import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSubordinatesComponent } from './manager-subordinates.component';

describe('ManagerSubordinatesComponent', () => {
  let component: ManagerSubordinatesComponent;
  let fixture: ComponentFixture<ManagerSubordinatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerSubordinatesComponent]
    });
    fixture = TestBed.createComponent(ManagerSubordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
