import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropDownService {
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
    return this.http.get('https://localhost:7049/api/Employee/departments');
  }

  getPriorities(): Observable<any> {
    return this.http.get('https://localhost:7049/api/Employee/priorities');
  }

  getCategories(): Observable<any> {
    return this.http.get('https://localhost:7049/api/Employee/categories');
  }

  getAgents(): Observable<any> {
    return this.http.get(
      'https://localhost:7049/api/l2/agents?DepartmentId=12'
    );
  }
}
