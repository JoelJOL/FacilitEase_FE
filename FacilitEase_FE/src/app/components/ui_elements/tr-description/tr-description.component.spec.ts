import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrDescriptionComponent } from './tr-description.component';

describe('TrDescriptionComponent', () => {
  let component: TrDescriptionComponent;
  let fixture: ComponentFixture<TrDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrDescriptionComponent]
    });
    fixture = TestBed.createComponent(TrDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
