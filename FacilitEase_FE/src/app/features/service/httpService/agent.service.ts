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
    const apiUrl = `https://localhost:7049/api/L3Admin/ticketdetail-by-agent/${ticketId}`;
    return this.http.get(apiUrl);
  }

  getTicketData(ticketId: number): Observable<any> {
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

  AcceptCancelTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/AcceptTicketCancellation/${ticketId}`;
    return this.http.patch(apiUrl, null);
  }

  DenyCancelTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/DenyTicketCancellation/${ticketId}`;
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

  updateComment(
    ticketId: number,
    newText: string,
    options?: any
  ): Observable<any> {
    return this.http.patch(
      `https://localhost:7049/api/L3Admin/update-comment/${ticketId}`,
      { newText },
      options
    );
  }

  addComment(text: string, ticketId: number): Observable<any> {
    const commentData = { text, ticketId };
    const url =`https://localhost:7049/api/L3Admin`;
    return this.http.post(`${url}`, commentData);
  }

  deleteComment(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/L3Admin/delete-comment/${ticketId}`;
    return this.http.delete(url);
  }

  getAllTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetRaisedTicketsByAgent/${agentId}`;
    return apiUrl;
  }

  getAllResolvedTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetResolvedTicketsByAgent/${agentId}`;
    return apiUrl;
  }

  getAllOnHoldTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetOnHoldTicketsByAgent/${agentId}`;
    return apiUrl;
  }

  getAllCancelRequestTickets(): string {
    const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/GetCancelRequestTicketsByAgent/${agentId}`;
    return apiUrl;
  }

  private baseUrl = 'https://localhost:7049';
  getUserEmailAddress(): Observable<any> {
    const userId = 1;
    const apiUrl = `https://localhost:7049/api/email/${userId}`;

    // Replace 'any' with the actual type of the response
    return this.http.get<any>(apiUrl);
  }

  sendEmailToSupport(
    userEmail: string,
    userName: string,
    supportDetails: string
  ): Observable<any> {
    const apiUrl = `${this.baseUrl}/api/email/send`;

    // Replace 'any' with the actual type of the response
    return this.http.post<any>(apiUrl, {
      toEmail: userEmail,
      subject: `Query For Support from ${userName}`,
      body: `${supportDetails} \n\nUser Email: ${userEmail}`, // Add user's email as CC
    });
  }
}
