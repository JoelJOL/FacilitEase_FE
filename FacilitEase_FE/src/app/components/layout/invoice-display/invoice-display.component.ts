import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TicketAttachment } from '@app/features/l3admin/l3Models/model';

@Component({
  selector: 'app-invoice-display',
  templateUrl: './invoice-display.component.html',
  styleUrls: ['./invoice-display.component.css'],
})
export class InvoiceDisplayComponent implements OnInit {
  // API base URL
  private apiUrl = 'https://localhost:7049';

  // File-related properties
  fileUrl!: string;
  isImage = false;

  // Input properties from parent component
  @Input() headerText = '';
  @Input() ticketId: number = 0;

  // Constructor with injected HttpClient
  constructor(private http: HttpClient) {}

  // Lifecycle hook: Executes when the component is initialized
  ngOnInit(): void {
    // First API endpoint to fetch document information by ticket ID
    const firstApiEndpoint = `${this.apiUrl}/api/Invoice/getInvoices/${this.ticketId}`;

    // Fetch the document data from the first API endpoint
    this.getFileData(firstApiEndpoint).subscribe(
      (response: TicketAttachment[]) => {
        if (response && response.length > 0 && response[0].documentLink) {
          const documentLink = response[0].documentLink;

          // Construct the full file URL
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

  // Function to fetch data from the specified API endpoint
  getFileData(apiEndpoint: string) {
    return this.http.get<TicketAttachment[]>(apiEndpoint);
  }

  // Function to determine if the file is an image based on its extension
  isImageFile(filename: string): boolean {
    // Add more image file extensions if needed
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', 'svg'];
    const extension = filename.slice(
      ((filename.lastIndexOf('.') - 1) >>> 0) + 2
    );

    return imageExtensions.includes(extension.toLowerCase());
  }

  // Function to open the file (image or non-image)
  openFile(): void {
    if (!this.isImage) {
      console.log('Opening non-image file...');
      // Open the file URL directly in a new tab for non-image files
      window.open(this.fileUrl, '_blank');
    } else {
      console.log('Opening image...');
      window.open(this.fileUrl, '_blank');
    }
  }
}
