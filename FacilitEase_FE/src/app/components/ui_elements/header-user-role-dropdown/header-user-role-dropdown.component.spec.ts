import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserRoleDropdownComponent } from './header-user-role-dropdown.component';

describe('HeaderUserRoleDropdownComponent', () => {
  let component: HeaderUserRoleDropdownComponent;
  let fixture: ComponentFixture<HeaderUserRoleDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUserRoleDropdownComponent]
    });
    fixture = TestBed.createComponent(HeaderUserRoleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
