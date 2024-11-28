import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  assignRolesApi = environment.baseUrl+'/api/RoleAssignment/possibleroles';
  getSuggestions(text: string): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl+`/api/RoleAssignment/${text}`
    );
  }
  GetEmployeeDetails(empId: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl+`/api/employee/${empId}`);
  }
  GetOptions(apiLink: string, id: number): Observable<string[]> {
    return this.http.get<string[]>(`${apiLink}/${id}`);
  }
  AssignRole(empId: number, option: string): Observable<any> {
    return this.http.post<any>(
      environment.baseUrl+'/api/RoleAssignment/AssignRoles',
      {
        empId: empId,
        roleName: option,
      }
    );
  }
}
