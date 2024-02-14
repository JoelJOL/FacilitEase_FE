import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketDetails } from '@app/features/l3admin/l2Models/ticket-details';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  // Constructor to initialize HttpClient and AzureService dependencies
  constructor(private http: HttpClient, private azureService: AzureService) {}

  userId: number = this.azureService.userId; // Property to store the user's ID retrieved from the AzureService

  // Method to fetch ticket details for a given ticket ID
  getData(ticketId: number): Observable<TicketDetails> {
    console.log(`The ticket id : ${ticketId} is recieved in getData()`);
    const apiUrl = `https://localhost:7049/api/L3Admin/ticketdetail-by-agent/${ticketId}`;
    return this.http.get<TicketDetails>(apiUrl);
  }

  // Method to fetch general ticket data for a given ticket ID
  getTicketData(ticketId: number): Observable<any> {
    console.log(`The ticket id : ${ticketId} is recieved in getData()`);
    const apiUrl = `https://localhost:7049/api/l2/ticketById?desiredTicketId=${ticketId}`;
    return this.http.get(apiUrl);
  }

  getDepartments(): Observable<any> {
    return this.http.get(
      `https://localhost:7049/api/Department/getAllExceptUserDepartment/${this.userId}`
    );
  }

  // Method to fetch departments
  getCategorybyDept(deptId: number): Observable<any> {
    return this.http.get(
      `https://localhost:7049/api/Department/categories-by-department/${deptId}`
    );
  }

  // Method to forward a ticket to a manager
  forwardTicketManager(ticketId: number, managerId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/forward-ticket/${ticketId}/${managerId}`;
    return this.http.get(apiUrl);
  }

  // Method to forward a ticket to a department head
  forwardTicketDeptHead(empId: number, ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/forward-ticket-deptHead/${ticketId}/${empId}`;
    return this.http.patch(apiUrl, null);
  }

  // Method to resolve a ticket
  resolveTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/resolve-ticket/${ticketId}`;
    return this.http.patch(apiUrl, null);
  }

  // Method to accept ticket cancellation request
  AcceptCancelTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/AcceptTicketCancellation/${ticketId}`;
    return this.http.patch(apiUrl, null);
  }

  // Method to deny ticket cancellation request
  DenyCancelTicket(ticketId: number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/DenyTicketCancellation/${ticketId}`;
    return this.http.patch(apiUrl, null);
  }
  // getAllResolvedTickets(): Observable<any> {
  //   const agentId = 3;
  //   const apiUrl = `https://localhost:7049/api/L3Admin/resolved-tickets-by-agent/${agentId}`;
  //   return this.http.get(apiUrl);
  // }

  // Method to fetch comment text for a given ticket ID
  getCommentText(ticketId: any): Observable<string> {
    const url = `https://localhost:7049/api/L3Admin/ticket-commenttext/${ticketId}`;
    return this.http.get(url, { responseType: 'text' });
  }

  // Method to update comment for a ticket
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

  // Method to add a new comment for a ticket
  addComment(text: string, ticketId: number): Observable<any> {
    const commentData = { text, ticketId };
    const url = `https://localhost:7049/api/L3Admin`;
    return this.http.post(`${url}`, commentData);
  }

  // Method to delete a comment for a ticket
  deleteComment(ticketId: number): Observable<any> {
    const url = `https://localhost:7049/api/L3Admin/delete-comment/${ticketId}`;
    return this.http.delete(url);
  }

  // Method to fetch time since the last update for a ticket
  getTimeSinceLastUpdate(ticketId: any): Observable<string> {
    return this.http.get(
      `https://localhost:7049/api/L3Admin/TimeSinceLastUpdate/${ticketId}`,
      { responseType: 'text' }
    );
  }

  // Method to fetch all tickets raised assigned to that particular admin
  getAllTickets(): string {
    const apiUrl = `https://localhost:7049/api/L3Admin/GetRaisedTicketsByAgent/${this.userId}`;
    return apiUrl;
  }

  // Method to fetch all tickets resolved by the l3 admin
  getAllResolvedTickets(): string {
    const apiUrl = `https://localhost:7049/api/L3Admin/GetResolvedTicketsByAgent/${this.userId}`;
    return apiUrl;
  }

  // Method to fetch all on-hold tickets of the l3 admin
  getAllOnHoldTickets(): string {
    const apiUrl = `https://localhost:7049/api/L3Admin/GetOnHoldTicketsByAgent/${this.userId}`;
    return apiUrl;
  }

  // Method to fetch all ticket cancellation request tickets raised by the employee
  getAllCancelRequestTickets(): string {
    const apiUrl = `https://localhost:7049/api/L3Admin/GetCancelRequestTicketsByAgent/${this.userId}`;
    return apiUrl;
  }

  private baseUrl = 'https://localhost:7049';
  // Method to fetch user's email address
  getUserEmailAddress(): Observable<any> {
    const apiUrl = `https://localhost:7049/api/email/${this.userId}`;

    // Replace 'any' with the actual type of the response
    return this.http.get<any>(apiUrl);
  }

  // Method to send email to support
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

  getTrackingDetails(ticketId: number): Observable<any[]> {
    const apiUrl = `https://localhost:7049/api/L3Admin/tracking-details/${ticketId}`;
    return this.http.get<any[]>(apiUrl);
  }
}
