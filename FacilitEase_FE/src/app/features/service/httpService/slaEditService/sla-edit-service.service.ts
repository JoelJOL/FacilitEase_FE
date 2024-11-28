import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlaEditServiceService {

  constructor(private http: HttpClient) { }
  editTicketSLA(ticketId: number, time: number) {
    const url = environment.baseUrl+'/api/l2/edit-sla';
    const body = { ticketId, time };
    return this.http.post<any>(url, body);
  }
}
