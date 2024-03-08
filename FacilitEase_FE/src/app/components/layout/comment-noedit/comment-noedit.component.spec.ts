import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentNoeditComponent } from './comment-noedit.component';

describe('CommentNoeditComponent', () => {
  let component: CommentNoeditComponent;
  let fixture: ComponentFixture<CommentNoeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentNoeditComponent]
    });
    fixture = TestBed.createComponent(CommentNoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
