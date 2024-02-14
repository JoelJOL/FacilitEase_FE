import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketAttachment } from '@app/features/Interface/interface';

@Component({
  selector: 'app-ticket-documents',
  templateUrl: './ticket-documents.component.html',
  styleUrls: ['./ticket-documents.component.css'],
})
export class TicketDocumentsComponent implements OnInit {
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
    const firstApiEndpoint = `${this.apiUrl}/api/Employee/get-documents-by-ticket/${this.ticketId}`;

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
