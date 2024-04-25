import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlaEditServiceService {

  constructor(private http: HttpClient) { }
  editTicketSLA(ticketId: number, time: number) {
    const url = 'https://localhost:7049/api/l2/EditTicketSLA';
    const body = { ticketId, time };
    return this.http.post<any>(url, body);
  }
}
