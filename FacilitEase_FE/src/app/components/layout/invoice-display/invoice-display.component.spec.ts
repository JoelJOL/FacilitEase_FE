import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDisplayComponent } from './invoice-display.component';

describe('InvoiceDisplayComponent', () => {
  let component: InvoiceDisplayComponent;
  let fixture: ComponentFixture<InvoiceDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceDisplayComponent]
    });
    fixture = TestBed.createComponent(InvoiceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
