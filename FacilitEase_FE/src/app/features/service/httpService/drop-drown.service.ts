import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDrownService {

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
}
