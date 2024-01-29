import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUpDownComponent } from './sort-up-down.component';

describe('SortUpDownComponent', () => {
  let component: SortUpDownComponent;
  let fixture: ComponentFixture<SortUpDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortUpDownComponent]
    });
    fixture = TestBed.createComponent(SortUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
