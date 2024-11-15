import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionsComponent } from './user-permissions.component';

describe('UserPermissionsComponent', () => {
  let component: UserPermissionsComponent;
  let fixture: ComponentFixture<UserPermissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPermissionsComponent]
    });
    fixture = TestBed.createComponent(UserPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
