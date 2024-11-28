import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentHeadService {
  constructor(private http: HttpClient, private azureService: AzureService) { }
  userId: number = this.azureService.userId;
  getApiLink(): string {
    const apiUrl = environment.baseUrl+`/api/tickets/GetApprovalTicket/${this.userId}`;
    return apiUrl;
  }

  getdepartmentHeadTicketDetails(ticketId: number): Observable<any> {
    const url = environment.baseUrl+`/api/tickets/ViewTicketDetails/${ticketId}`;
    return this.http.get<any>(url);
  }

  getProjectCodes(): Observable<any> {
    const url = environment.baseUrl+`/api/Department/getProjectCodes`;
    return this.http.get<any>(url);
  }
}
