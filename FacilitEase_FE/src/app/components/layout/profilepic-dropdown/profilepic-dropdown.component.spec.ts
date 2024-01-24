import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepicDropdownComponent } from './profilepic-dropdown.component';

describe('ProfilepicDropdownComponent', () => {
  let component: ProfilepicDropdownComponent;
  let fixture: ComponentFixture<ProfilepicDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilepicDropdownComponent]
    });
    fixture = TestBed.createComponent(ProfilepicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
