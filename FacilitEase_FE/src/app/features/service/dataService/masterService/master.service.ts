import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  private apiLinkEscalated: string =
    'https://localhost:7049/api/l2/escalated-tickets';
  private apiLinkAssigned: string =
    'https://localhost:7049/api/l2/assigned-tickets';
  private apiLinkUnassigned: string =
    'https://localhost:7049/api/l2/unassigned-tickets';
  userId = 1;
  private apiLinkProjectEmployeeDeatils: string = `https://localhost:7049/api/Employee/employeesByProject/${this.userId}`;
  getApiLink(): string {
    const apiUrl = 'https://localhost:7049/api/Manager/GetTicketByManager/17';
    return apiUrl;
  }
  getApiLink2(): string {
    const apiUrl = 'https://localhost:7049/api/Manager/GetApprovalTicket/17';
    return apiUrl;
  }
  getApiLink3(): string {
    const apiUrl = 'https://localhost:7049/api/Manager/GetLiveTicketByManager/17';
    return apiUrl;
  }
  getManagerTicketDetails(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/Manager/ViewTicketDetails/${ticketId}`;
    return this.http.get<any>(url);
  }
  changePriority(ticketId: number, newPriorityId: number): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/ChangePriority`, {
      ticketId,
      newPriorityId,
    });
  }
  ticketDecision(ticketId: number, newStatusId: number): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/TicketDecision`, {
      ticketId,
      newStatusId,
    });
  }
  sendForApproval(
    ticketId: number,
    currentControllerId: number
  ): Observable<any> {
    const apiUrl = 'https://localhost:7049/api/Manager';
    return this.http.post(`${apiUrl}/SendForApproval`, {
      ticketId,
      currentControllerId,
    });
  }
  getApiLinkEscalated(): string {
    return this.apiLinkEscalated;
  }
  getApiLinkAssigned(): string {
    return this.apiLinkAssigned;
  }
  getApiLinkUnassigned(): string {
    return this.apiLinkUnassigned;
  }
  DepartmentId = 11;
  private apiLinkL2Subordinates: string = `https://localhost:7049/api/l2/agentsByDepartmentId?DepartmentId=${this.DepartmentId}`;
  getApiLinkL2Subordinates(): string {
    return this.apiLinkL2Subordinates;
  }
  getApiLinkProjectEmployeeDetails(): string {
    return this.apiLinkProjectEmployeeDeatils;
  }
}
