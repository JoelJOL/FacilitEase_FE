// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// // Define an interface for your API response
// interface ApiResponse {
//   documentLink: string;
// }

// @Component({
//   selector: 'app-ticket-documents',
//   templateUrl: './ticket-documents.component.html',
//   styleUrls: ['./ticket-documents.component.css'],
// })
// export class TicketDocumentsComponent implements OnInit {
//   private apiUrl = 'https://localhost:7049';
//   fileUrl!: string;
//   isImage = false;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     const firstApiEndpoint =
//       'https://localhost:7049/api/Employee/get-documents-by-ticket/54';

//     // Fetch the entire response from the first API endpoint
//     this.getFileData(firstApiEndpoint).subscribe(
//       (response: ApiResponse[]) => {
//         if (response && response.length > 0 && response[0].documentLink) {
//           const documentLink = response[0].documentLink;
//           this.fileUrl = `${this.apiUrl}/${documentLink}`;
//           console.log(this.fileUrl);
//           // Check if the file is an image based on the file extension
//           this.isImage = this.isImageFile(documentLink);
//         } else {
//           console.error(
//             'File link not present or undefined in the API response.'
//           );
//         }
//       },
//       (error) => {
//         console.error('Error fetching file:', error);
//       }
//     );
//   }

//   getFileData(apiEndpoint: string) {
//     return this.http.get<ApiResponse[]>(apiEndpoint);
//   }

//   isImageFile(filename: string): boolean {
//     // You can add more file extensions if needed
//     const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
//     const extension = filename.slice(
//       ((filename.lastIndexOf('.') - 1) >>> 0) + 2
//     );

//     return imageExtensions.includes(extension.toLowerCase());
//   }

//   openFile(): void {
//     if (!this.isImage) {
//       console.log('Opening non-image file...');
//       // Open the file URL directly in a new tab for non-image files
//       window.open(this.fileUrl, '_blank');
//     } else {
//       console.log('Opening image...');
//       // You can implement your logic for opening the image (e.g., display in a lightbox)
//     }
//   }
// }
// ticket-documents.component.ts
import { Component, OnInit } from '@angular/core';
import { TicketAttachmentService } from '@app/features/service/httpService/ticketAttachment/ticket-attachment.service';

@Component({
  selector: 'app-ticket-documents',
  templateUrl: './ticket-documents.component.html',
  styleUrls: ['./ticket-documents.component.css'],
  providers: [TicketAttachmentService], // Add the service to the providers array
})
export class TicketDocumentsComponent implements OnInit {
  fileUrl!: string;
  isImage = false;

  constructor(private ticketAttachmentService: TicketAttachmentService) {}

  ngOnInit(): void {
    const ticketId = 54; // You can pass the ticket ID dynamically as needed
    this.ticketAttachmentService.getTicketAttachments(ticketId).subscribe(
      (response) => {
        if (response && response.length > 0 && response[0].documentLink) {
          const documentLink = response[0].documentLink;
          this.fileUrl = `${documentLink}`;
          console.log(this.fileUrl);
          this.isImage = this.ticketAttachmentService.isImageFile(documentLink);
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

  openFile(): void {
    if (!this.isImage) {
      console.log('Opening non-image file...');
      window.open(this.fileUrl, '_blank');
    } else {
      console.log('Opening image...');
      // Implement your logic for opening the image (e.g., display in a lightbox)
    }
  }
}
