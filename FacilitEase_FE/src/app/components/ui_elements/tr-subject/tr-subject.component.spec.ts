import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrSubjectComponent } from './tr-subject.component';

describe('TrSubjectComponent', () => {
  let component: TrSubjectComponent;
  let fixture: ComponentFixture<TrSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrSubjectComponent]
    });
    fixture = TestBed.createComponent(TrSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
