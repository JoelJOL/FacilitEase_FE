import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerSubordinatesService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  private apiUrl = `https://localhost:7049/api/Manager/${this.userId}/subordinates`; // Replace with your actual API URL
  getEmployeeDetails() {
    const url = `${this.apiUrl}`; // Adjust the URL based on your API endpoint
    return url;
  }
}
