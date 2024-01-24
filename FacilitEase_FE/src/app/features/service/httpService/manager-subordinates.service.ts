import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerSubordinatesService {
  private apiUrl = 'https://localhost:7049/api/managers/1/subordinates'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getEmployeeDetails(): Observable<any> {
    const url = `${this.apiUrl}`; // Adjust the URL based on your API endpoint
    return this.http.get<any>(url);
  }
}
