import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
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
