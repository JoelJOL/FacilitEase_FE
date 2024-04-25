// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';

// @Component({
//   selector: 'app-invoice-upload',
//   templateUrl: './invoice-upload.component.html',
//   styleUrls: ['./invoice-upload.component.css'],
// })
// export class InvoiceUploadComponent {
//   selectedFile: File | null = null;
//   @Input() ticketId: number = 0;
//   @Output() fileUploaded = new EventEmitter<void>();

//   constructor(private fileUploadService: InvoiceFileUploadService) {}

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       this.fileUploadService
//         .uploadFile(this.selectedFile, this.ticketId)
//         .subscribe(
//           (response) => {
//             console.log('File uploaded successfully', response);

//             this.fileUploaded.emit();
//           },
//           (error) => {
//             console.error('Error uploading file', error);
//           }
//         );
//     }
//   }
// }
// invoice-upload.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';

@Component({
  selector: 'app-invoice-upload',
  templateUrl: './invoice-upload.component.html',
  styleUrls: ['./invoice-upload.component.css'],
})
export class InvoiceUploadComponent {
  selectedFile: File | null = null;
  uploading: boolean = false;
  uploadProgress: number = 0;

  @Input() ticketId: number = 0;
  @Output() fileUploaded = new EventEmitter<void>();

  constructor(private fileUploadService: InvoiceFileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploading = true;

      this.fileUploadService
        .uploadFile(this.selectedFile, this.ticketId)
        .subscribe(
          (event: any) => {
            if (event.type === 'uploadProgress') {
              this.uploadProgress = Math.round(
                (100 * event.loaded) / (event.total || 1)
              );
            } else if (event.type === 'response') {
              console.log('File uploaded successfully', event.body);

              this.fileUploaded.emit();
              this.uploading = false;
              this.uploadProgress = 0;
            }
          },
          (error) => {
            console.error('Error uploading file', error);
            this.uploading = false;
            this.uploadProgress = 0;
          },
          () => {
            console.log('Upload completed');
            // This block will be executed when the upload is complete
          }
        );
    }
  }
}
