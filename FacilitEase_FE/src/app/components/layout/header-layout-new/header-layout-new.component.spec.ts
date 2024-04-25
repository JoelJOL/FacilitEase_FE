import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayoutNewComponent } from './header-layout-new.component';

describe('HeaderLayoutNewComponent', () => {
  let component: HeaderLayoutNewComponent;
  let fixture: ComponentFixture<HeaderLayoutNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLayoutNewComponent]
    });
    fixture = TestBed.createComponent(HeaderLayoutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
