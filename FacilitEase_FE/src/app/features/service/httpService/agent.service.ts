import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(private http: HttpClient) {}
  getData(ticketId: number): Observable<any> {
    console.log(`The ticket id : ${ticketId} is recieved in getData()`);
    const apiUrl = `https://localhost:7049/api/l2/ticketById?desiredTicketId=${ticketId}`;
    return this.http.get(apiUrl);
  }

  getDepartments(): Observable<any> {
    return this.http.get('https://localhost:7049/api/Department');
  }

  getCategorybyDept(deptId: number): Observable<any> {
    return this.http.get(
      `https://localhost:7049/api/Department/categories-by-department/${deptId}`
    );
  }

  forwardTicketManager(ticketId: number, managerId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/forward-ticket/${ticketId}/${managerId}`;
    return this.http.get(apiUrl);
  }

  forwardTicketDepartment(
    ticketId: number,
    managerId: number
  ): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/forward-ticket-to-department/${ticketId}/${managerId}`;
    return this.http.get(apiUrl);
  }

  resolveTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/resolve-ticket/${ticketId}`;
    return this.http.patch(apiUrl, null);
  }
  // getAllResolvedTickets(): Observable<any> {
  //   const agentId = 3;
  //   const apiUrl = `https://localhost:7049/api/L3Admin/resolved-tickets-by-agent/${agentId}`;
  //   return this.http.get(apiUrl);
  // }

  getCommentText(ticketId: any): Observable<string> {
    const url = `https://localhost:7049/api/L3Admin/ticket-commenttext/${ticketId}`;
    return this.http.get(url, { responseType: 'text' });
  }

updateComment(ticketId: number, newText: string,options?: any): Observable<any> {
  return this.http.patch(`https://localhost:7049/api/L3Admin/update-comment/${ticketId}`, {newText},options);
}

  getAllTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetTicketsByAgent/${agentId}`;
    return apiUrl;
  }

  getAllResolvedTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetResolvedTicketsByAgent/${agentId}`;
    return apiUrl;
  }
}
