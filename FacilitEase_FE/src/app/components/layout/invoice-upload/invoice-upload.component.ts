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
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';
import { FileUploadModalComponent } from '../file-upload-modal/file-upload-modal.component';

@Component({
  selector: 'app-invoice-upload',
  templateUrl: './invoice-upload.component.html',
  styleUrls: ['./invoice-upload.component.css'],
})
export class InvoiceUploadComponent {
  @Input() ticketId!: number;

  constructor(private dialog: MatDialog) {}

  openFileUploadModal(): void {
    const dialogConfig: MatDialogConfig = {
      width: '400px',
      disableClose: true,
      data: { ticketId: this.ticketId },
    };

    const dialogRef = this.dialog.open(FileUploadModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result after the file input modal is closed
      if (result && result.success) {
        // Perform any additional actions if needed
      }
    });
  }
}
