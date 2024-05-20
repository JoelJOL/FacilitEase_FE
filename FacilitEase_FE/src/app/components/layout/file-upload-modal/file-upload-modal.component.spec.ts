import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadModalComponent } from './file-upload-modal.component';

describe('FileUploadModalComponent', () => {
  let component: FileUploadModalComponent;
  let fixture: ComponentFixture<FileUploadModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadModalComponent]
    });
    fixture = TestBed.createComponent(FileUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
