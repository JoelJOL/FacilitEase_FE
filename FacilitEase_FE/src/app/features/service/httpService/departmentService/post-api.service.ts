import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostAPIService {
  ticketApiUrl: string = environment.baseUrl+'/api/Employee/raiseticket';
  departmentApiUrl: string = environment.baseUrl+'/api/departments';

  constructor(private http: HttpClient) {}

  postUser(ticketData: any): Observable<any> {
    return this.http.post<any>(this.ticketApiUrl, {
      TicketName: ticketData.subject,
      TicketDescription: ticketData.description,
      CategoryId: ticketData.category,
      DepartmentId: ticketData.department,
      PriorityId: ticketData.priority,
    });
  }

  postDepartment(departmentData: any): Observable<any> {
    return this.http.post<any>(this.departmentApiUrl, {
      deptName: departmentData.DeptName,
    });
  }
}
