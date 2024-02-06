// ticket-documents.component.ts
import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '@app/features/service/httpService/GetAPI/get-api.service';

@Component({
  selector: 'app-ticket-documents',
  templateUrl: './ticket-documents.component.html',
  styleUrls: ['./ticket-documents.component.css'],
})
export class TicketDocumentsComponent implements OnInit {
  ticketId = 31;
  documentLink: string | undefined;

  constructor(private documentService: GetAPIService) {}

  ngOnInit(): void {
    this.documentService.getDocumentPath(this.ticketId).subscribe(
      (response: any) => {
        this.documentLink = response.documentLink;
      },
      (error) => {
        console.error('Error fetching document path:', error);
      }
    );
  }

  getDocumentUrl(): string {
    if (this.documentLink) {
      // If the documentLink already contains 'Resources\Images\', use it directly
      if (this.documentLink.includes('Resources\\Images\\')) {
        return `https://localhost:7049/${this.documentLink}`;
      } else {
        // If not, append 'Resources\Images\' to the documentLink
        return `https://localhost:7049/Resources\\Images\\${this.documentLink}`;
      }
    } else {
      return '';
    }
  }
}
