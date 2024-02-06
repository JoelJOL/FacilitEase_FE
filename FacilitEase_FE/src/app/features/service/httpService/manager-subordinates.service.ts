import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerSubordinatesService {
  managerId = 2;
  private apiUrl = `https://localhost:7049/api/Manager/${this.managerId}/subordinates`; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getEmployeeDetails() {
    const url = `${this.apiUrl}`; // Adjust the URL based on your API endpoint
    return url;
  }
}
