import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsNoeditComponent } from './comments-noedit.component';

describe('CommentsNoeditComponent', () => {
  let component: CommentsNoeditComponent;
  let fixture: ComponentFixture<CommentsNoeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsNoeditComponent]
    });
    fixture = TestBed.createComponent(CommentsNoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
