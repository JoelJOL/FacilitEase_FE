import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiLink: string = 'https://localhost:7049/api/Manager/GetTicketByManager/2';
  private apiLink2: string = 'https://localhost:7049/api/Manager/GetApprovalTicket/2';
  getApiLink(): string {
    return this.apiLink;
  }
  getApiLink2(): string {
    return this.apiLink2;
  }
}
