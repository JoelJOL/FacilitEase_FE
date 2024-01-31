import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentHeadService {
  constructor(private http: HttpClient) {}

  getApiLink(): string {
    const apiUrl = 'https://localhost:7049/api/tickets/GetApprovalTicket/16';
    return apiUrl;
  }

  getdepartmentHeadTicketDetails(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/tickets/ViewTicketDetails/${ticketId}`;
    return this.http.get<any>(url);
  }
}
