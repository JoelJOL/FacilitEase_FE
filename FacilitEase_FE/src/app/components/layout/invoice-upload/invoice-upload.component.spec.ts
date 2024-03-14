import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUploadComponent } from './invoice-upload.component';

describe('InvoiceUploadComponent', () => {
  let component: InvoiceUploadComponent;
  let fixture: ComponentFixture<InvoiceUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceUploadComponent],
    });
    fixture = TestBed.createComponent(InvoiceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
