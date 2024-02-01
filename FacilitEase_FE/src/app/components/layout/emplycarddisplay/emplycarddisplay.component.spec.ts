import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplycarddisplayComponent } from './emplycarddisplay.component';

describe('EmplycarddisplayComponent', () => {
  let component: EmplycarddisplayComponent;
  let fixture: ComponentFixture<EmplycarddisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplycarddisplayComponent]
    });
    fixture = TestBed.createComponent(EmplycarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
