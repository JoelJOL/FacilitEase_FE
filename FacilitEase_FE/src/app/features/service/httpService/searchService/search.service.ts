import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  assignRolesApi = 'https://localhost:7049/api/RoleAssignment/possibleroles';
  getSuggestions(text: string): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/RoleAssignment/${text}`
    );
  }
  GetEmployeeDetails(empId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7049/api/Employee/${empId}`);
  }
  GetOptions(apiLink: string, id: number): Observable<string[]> {
    return this.http.get<string[]>(`${apiLink}/${id}`);
  }
  AssignRole(empId: number, option: string): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7049/api/RoleAssignment/AssignRoles',
      {
        empId: empId,
        roleName: option,
      }
    );
  }
}
