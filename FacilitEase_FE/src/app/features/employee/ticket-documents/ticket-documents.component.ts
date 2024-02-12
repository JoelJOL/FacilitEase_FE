import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketAttachment } from '@app/features/Interface/interface';

@Component({
  selector: 'app-ticket-documents',
  templateUrl: './ticket-documents.component.html',
  styleUrls: ['./ticket-documents.component.css'],
})
export class TicketDocumentsComponent implements OnInit {
  private apiUrl = 'https://localhost:7049';
  fileUrl!: string;
  isImage = false;
  @Input() headerText = '';
  @Input() ticketId: number=0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const firstApiEndpoint =
      `https://localhost:7049/api/Employee/get-documents-by-ticket/${this.ticketId}`;

    // Fetch the entire response from the first API endpoint
    this.getFileData(firstApiEndpoint).subscribe(
      (response: TicketAttachment[]) => {
        if (response && response.length > 0 && response[0].documentLink) {
          const documentLink = response[0].documentLink;
          this.fileUrl = `${this.apiUrl}/${documentLink}`;
          console.log(this.fileUrl);
          // Check if the file is an image based on the file extension
          this.isImage = this.isImageFile(documentLink);
        } else {
          console.error(
            'File link not present or undefined in the API response.'
          );
        }
      },
      (error) => {
        console.error('Error fetching file:', error);
      }
    );
  }

  getFileData(apiEndpoint: string) {
    return this.http.get<TicketAttachment[]>(apiEndpoint);
  }

  isImageFile(filename: string): boolean {
    // You can add more file extensions if needed
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', 'svg'];
    const extension = filename.slice(
      ((filename.lastIndexOf('.') - 1) >>> 0) + 2
    );

    return imageExtensions.includes(extension.toLowerCase());
  }

  openFile(): void {
    if (!this.isImage) {
      console.log('Opening non-image file...');
      // Open the file URL directly in a new tab for non-image files
      window.open(this.fileUrl, '_blank');
    } else {
      console.log('Opening image...');
      // You can implement your logic for opening the image (e.g., display in a lightbox)
    }
  }
}
