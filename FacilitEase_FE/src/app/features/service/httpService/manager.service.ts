// manager.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private apiUrl = 'https://localhost:7049/api/Manager'; // Replace with the actual managers API endpoint
  private submitUrl = 'https://localhost:7049/api/Employee'; // Replace with the actual form submission API endpoint

  constructor(private http: HttpClient) {}

  getManagers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  submitForm(formData: any): Observable<any> {
    // Ensure the server expects JSON data, adjust headers if necessary
    return this.http.post<any>(this.submitUrl, formData);
  }
}
