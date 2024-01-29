import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAPIService {
  ticketApiUrl: string = 'https://localhost:7049/api/Employee/raiseticket';
  departmentApiUrl: string = 'https://localhost:7049/api/L1Admin/departments';
 
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
  

