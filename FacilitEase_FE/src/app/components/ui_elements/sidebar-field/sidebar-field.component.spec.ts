import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFieldComponent } from './sidebar-field.component';

describe('SidebarFieldComponent', () => {
  let component: SidebarFieldComponent;
  let fixture: ComponentFixture<SidebarFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarFieldComponent]
    });
    fixture = TestBed.createComponent(SidebarFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
