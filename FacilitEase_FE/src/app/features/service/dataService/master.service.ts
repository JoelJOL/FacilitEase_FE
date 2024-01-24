import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private apiLink2: string =
    'https://localhost:7049/api/Manager/GetApprovalTicket/2';
  getApiLink2(): string {
    return this.apiLink2;
  }
  private apiLink: string =
    'https://localhost:7049/api/Manager/GetTicketByManager/2';
  private apiLinkEscalated: string =
    'https://localhost:7049/api/l2/escalated-tickets';
  private apiLinkAssigned: string =
    'https://localhost:7049/api/l2/assigned-tickets';
  getApiLink(): string {
    return this.apiLink;
  }
  getApiLinkEscalated(): string {
    return this.apiLinkEscalated;
  }
  getApiLinkAssigned(): string {
    return this.apiLinkAssigned;
  }
}
