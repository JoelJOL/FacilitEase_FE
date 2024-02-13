import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentHeadService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  getApiLink(): string {
    const apiUrl = `https://localhost:7049/api/tickets/GetApprovalTicket/${this.userId}`;
    return apiUrl;
  }

  getdepartmentHeadTicketDetails(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/tickets/ViewTicketDetails/${ticketId}`;
    return this.http.get<any>(url);
  }
}
