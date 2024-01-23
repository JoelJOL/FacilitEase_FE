import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrDropdownComponent } from './assign-dropdown.component';

describe('TrDropdownComponent', () => {
  let component: TrDropdownComponent;
  let fixture: ComponentFixture<TrDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrDropdownComponent],
    });
    fixture = TestBed.createComponent(TrDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
