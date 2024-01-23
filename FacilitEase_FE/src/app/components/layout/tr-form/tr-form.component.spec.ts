import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFormComponent } from './tr-form.component';

describe('TrFormComponent', () => {
  let component: TrFormComponent;
  let fixture: ComponentFixture<TrFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrFormComponent]
    });
    fixture = TestBed.createComponent(TrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
