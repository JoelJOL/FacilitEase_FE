import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient){}

  private apiLink: string =
    'https://localhost:7049/api/Manager/GetTicketByManager/2';
  private apiLinkEscalated: string =
    'https://localhost:7049/api/l2/escalated-tickets';
  private apiLinkAssigned: string =
    'https://localhost:7049/api/l2/assigned-tickets';

  getApiLink(): string {
    const apiUrl = 'https://localhost:7049/api/Manager/GetTicketByManager/2';
    return apiUrl;
  }
  getApiLink2(): string {
    const apiUrl = 'https://localhost:7049/api/Manager/GetApprovalTicket/2';
    return apiUrl;
  }
  getManagerTicketDetails(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/Manager/ViewTicketDetails/${ticketId}`;
    return this.http.get<any>(url);
  }
  changePriority(ticketId: number, newPriorityId: number): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/ChangePriority`, { ticketId, newPriorityId });
  }
  ticketDecision(ticketId: number, newStatusId: number): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/TicketDecision`, { ticketId, newStatusId });
  }
  sendForApproval(ticketId: number, currentControllerId: number): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/SendForApproval`, { ticketId, currentControllerId });
  }
  getApiLinkEscalated(): string {
    return this.apiLinkEscalated;
  }
  getApiLinkAssigned(): string {
    return this.apiLinkAssigned;
  }
  private apiLinkL2Subordinates: string =
    'https://localhost:7049/api/l2/agentsByDepartmentId?DepartmentId=11';
  getApiLinkL2Subordinates(): string {
    return this.apiLinkL2Subordinates;
  }
}
