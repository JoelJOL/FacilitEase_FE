import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1DataEntryComponent } from './l1-data-entry.component';

describe('L1DataEntryComponent', () => {
  let component: L1DataEntryComponent;
  let fixture: ComponentFixture<L1DataEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L1DataEntryComponent]
    });
    fixture = TestBed.createComponent(L1DataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
