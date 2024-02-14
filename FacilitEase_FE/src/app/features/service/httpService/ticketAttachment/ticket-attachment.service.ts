// ticket-attachment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketAttachment } from '@app/features/l3admin/l2Models/model';

@Injectable({
  providedIn: 'root',
})
export class TicketAttachmentService {
  private apiUrl = 'https://localhost:7049';

  constructor(private http: HttpClient) {}

  getTicketAttachments(ticketId: number): Observable<TicketAttachment[]> {
    const apiEndpoint = `${this.apiUrl}/api/Employee/get-attachments-by-ticket/${ticketId}`;
    return this.http.get<TicketAttachment[]>(apiEndpoint);
  }

  isImageFile(filename: string): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const extension = filename.slice(
      ((filename.lastIndexOf('.') - 1) >>> 0) + 2
    );

    return imageExtensions.includes(extension.toLowerCase());
  }
}
