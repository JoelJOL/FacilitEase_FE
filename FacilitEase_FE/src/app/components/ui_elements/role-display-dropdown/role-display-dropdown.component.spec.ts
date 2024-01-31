import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDisplayDropdownComponent } from './role-display-dropdown.component';

describe('RoleDisplayDropdownComponent', () => {
  let component: RoleDisplayDropdownComponent;
  let fixture: ComponentFixture<RoleDisplayDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDisplayDropdownComponent]
    });
    fixture = TestBed.createComponent(RoleDisplayDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
