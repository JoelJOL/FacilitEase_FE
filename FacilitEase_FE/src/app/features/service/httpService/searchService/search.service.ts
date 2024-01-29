import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  getSuggestions(text: string): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/RoleAssignment/${text}`
    );
  }
  GetEmployeeDetails(empId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7049/api/Employee/${empId}`);
  }
}
