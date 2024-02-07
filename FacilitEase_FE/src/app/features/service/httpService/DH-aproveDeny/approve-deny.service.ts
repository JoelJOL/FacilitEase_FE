// approve-deny.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApproveDenyService {
  private apiUrl = 'https://localhost:7049/api/tickets/change-status';

  constructor(private http: HttpClient) {}

  updateTicket(ticketId: string, isApproved: boolean): Observable<any> {
    const requestBody = {
      isApproved: isApproved,
    };

    return this.http.put(`${this.apiUrl}/${ticketId}`, requestBody);
  }
}
