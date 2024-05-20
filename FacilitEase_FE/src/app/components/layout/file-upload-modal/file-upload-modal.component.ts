// import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
// import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// @Component({
//   selector: 'app-file-upload-modal',
//   templateUrl: './file-upload-modal.component.html',
//   styleUrls: ['./file-upload-modal.component.css'],
// })
// export class FileUploadModalComponent {
//   selectedFile: File | null = null;
//   @Input() ticketId!: number;
//   @Output() fileUploaded = new EventEmitter<void>();
//   uploading: boolean = false;
//   uploadProgress: number = 0;

//   constructor(
//     private fileUploadService: InvoiceFileUploadService,
//     private dialogRef: MatDialogRef<FileUploadModalComponent>,
//     @Inject(MAT_DIALOG_DATA) data: any
//   ) {
//     console.log('Data received in constructor:', data);
//     if (data && data.ticketId) {
//       this.ticketId = data.ticketId;
//     }
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   onCancelClick(): void {
//     this.dialogRef.close();
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       this.uploading = true;
//       console.log('ticket id' + this.ticketId);
//       this.fileUploadService
//         .uploadFile(this.selectedFile, this.ticketId)
//         .subscribe(
//           (response) => {
//             console.log('File uploaded successfully', response);
//             this.fileUploaded.emit();
//             this.uploading = false;
//             this.dialogRef.close();
//           },
//           (error) => {
//             console.error('Error uploading file', error);
//             this.uploading = false;
//             this.dialogRef.close();
//           }
//         );
//     }
//   }
// }
import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-modal',
  templateUrl: './file-upload-modal.component.html',
  styleUrls: ['./file-upload-modal.component.css'],
})
export class FileUploadModalComponent {
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  @Input() ticketId!: number;
  @Output() fileUploaded = new EventEmitter<void>();
  uploading: boolean = false;
  uploadProgress: number = 0;

  constructor(
    private fileUploadService: InvoiceFileUploadService,
    private dialogRef: MatDialogRef<FileUploadModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    console.log('Data received in constructor:', data);
    if (data && data.ticketId) {
      this.ticketId = data.ticketId;
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.selectedFile.type.startsWith('image')) {
      this.previewUrl = URL.createObjectURL(this.selectedFile);
    } else {
      this.previewUrl = null;
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploading = true;
      console.log('ticket id' + this.ticketId);
      this.fileUploadService
        .uploadFile(this.selectedFile, this.ticketId)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully', response);
            this.fileUploaded.emit();
            this.uploading = false;
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error uploading file', error);
            this.uploading = false;
            this.dialogRef.close();
          }
        );
    }
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image');
  }

  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }
}
