import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  userIdL2Admin: number = this.azureService.userId;
  userIdL1Admin: number = this.azureService.userId;
  private apiLink: string =
    'https://localhost:7049/api/Manager/GetTicketByManager/2';
  private apiLinkEscalated: string = `https://localhost:7049/api/l2/escalated-tickets/${this.userIdL2Admin}`;
  private apiLinkAssigned: string = `https://localhost:7049/api/l2/assigned-tickets/${this.userIdL2Admin}`;
  private apiLinkUnassigned: string = `https://localhost:7049/api/l2/unassigned-tickets/${this.userIdL2Admin}`;
  userIdProjectEmployeeDetails = 19;
  private apiLinkProjectEmployeeDeatils: string = `https://localhost:7049/api/Employee/employeesByProject/${this.userIdProjectEmployeeDetails}`;
  getApiLink(): string {
    const apiUrl = `https://localhost:7049/api/Manager/GetTicketByManager/${this.userId}`;
    return apiUrl;
  }
  getApiLink2(): string {
    const apiUrl = `https://localhost:7049/api/Manager/GetApprovalTicket/${this.userId}`;
    return apiUrl;
  }
  getApiLink3(): string {
    const apiUrl = `https://localhost:7049/api/Manager/GetLiveTicketByManager/${this.userId}`;
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
  getApiLinkProjectEmployeeDetails(): string {
    return this.apiLinkProjectEmployeeDeatils;
  }
  private apiLinkTicketsToResolve: string = `https://localhost:7049/api/L3Admin/GetRaisedTicketsByAgent/${this.userIdL2Admin}`;
  getApiLinkTicketsToResolve(): string {
    return this.apiLinkTicketsToResolve;
  }
  private apiLinkCancellationRequests: string = `https://localhost:7049/api/L3Admin/GetCancelRequestTicketsByAgent/${this.userIdL2Admin}`;
  getApiLinkCancellationRequests(): string {
    return this.apiLinkCancellationRequests;
  }

  private apiEscaltedTicketForL1Admin = `https://localhost:7049/api/L1Admin/escalated-tickets/${this.userIdL1Admin}`;
  getEscalatedTicketForL1Admin(): string {
    return this.apiEscaltedTicketForL1Admin;
  }
}
