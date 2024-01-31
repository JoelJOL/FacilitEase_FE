// manager.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private apiUrl = 'https://localhost:7049/api/Manager'; //
  private apiUrl1 = 'https://localhost:7049/api/Employee/locations';
  private apiUrl2 = 'https://localhost:7049/api/Employee/departments';
  private apiUrl3 = 'https://localhost:7049/api/Employee/positions';
  private submitUrl = 'https://localhost:7049/api/Employee/AddEmployees'; //

  constructor(private http: HttpClient) {}

  getManagers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }

  getPositions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl3);
  }

  submitForm(formData: any): Observable<any> {
    // Ensure the server expects JSON data, adjust headers if necessary
    return this.http.post<any>(this.submitUrl, formData);
  }
}
