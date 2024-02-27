import { Component } from '@angular/core';
import { InvoiceFileUploadService } from '@app/features/service/httpService/invoiceService/invoice-file-upload.service';

@Component({
  selector: 'app-invoice-upload',
  templateUrl: './invoice-upload.component.html',
  styleUrls: ['./invoice-upload.component.css'],
})
export class InvoiceUploadComponent {
  selectedFile: File | null = null;
  ticketId: number = 22; // Replace with the actual ticket ID

  constructor(private fileUploadService: InvoiceFileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.fileUploadService
        .uploadFile(this.selectedFile, this.ticketId)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully', response);
          },
          (error) => {
            console.error('Error uploading file', error);
          }
        );
    }
  }
}
