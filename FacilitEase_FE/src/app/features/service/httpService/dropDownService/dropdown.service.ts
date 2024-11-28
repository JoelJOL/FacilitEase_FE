import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropDownService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  getAgents(): Observable<any> {
    return this.http.get(environment.baseUrl+`/api/l2/agents/${this.userId}`);
  }

  getMyTickets(): string {
    return environment.baseUrl+`/api/tickets/${this.userId}`;
  }
}
