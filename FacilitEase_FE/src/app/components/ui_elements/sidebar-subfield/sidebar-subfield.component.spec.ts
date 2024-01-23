import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubfieldComponent } from './sidebar-subfield.component';

describe('SidebarSubfieldComponent', () => {
  let component: SidebarSubfieldComponent;
  let fixture: ComponentFixture<SidebarSubfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubfieldComponent]
    });
    fixture = TestBed.createComponent(SidebarSubfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
