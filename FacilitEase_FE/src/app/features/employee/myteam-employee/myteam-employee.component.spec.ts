import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamEmployeeComponent } from './myteam-employee.component';

describe('MyteamEmployeeComponent', () => {
  let component: MyteamEmployeeComponent;
  let fixture: ComponentFixture<MyteamEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyteamEmployeeComponent]
    });
    fixture = TestBed.createComponent(MyteamEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
