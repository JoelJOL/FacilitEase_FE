import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropDownService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  getAgents(): Observable<any> {
    return this.http.get(`https://localhost:7049/api/l2/agents/${this.userId}`);
  }

  getMyTickets(): string {
    return `https://localhost:7049/api/Employee/tickets/${this.userId}`;
  }
}
