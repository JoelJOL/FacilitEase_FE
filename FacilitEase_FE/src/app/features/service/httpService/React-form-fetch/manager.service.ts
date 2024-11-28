// manager.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private apiUrl = environment.baseUrl+'/api/Manager'; //
  private apiUrl1 = environment.baseUrl+'/api/locations';
  private apiUrl2 = environment.baseUrl+'/api/departments';
  private apiUrl3 = environment.baseUrl+'/api/positions';
  private submitUrl = environment.baseUrl+'/api/Employee/AddEmployees'; //

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
