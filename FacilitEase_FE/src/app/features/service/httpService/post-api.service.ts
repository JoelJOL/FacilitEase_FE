import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAPIService {
  apiUrl: string = '';
  constructor(private http: HttpClient) {}

  
    
  
    postUser(ticketData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`, {
        subject: ticketData.subject,
        description: ticketData.description,
        category: ticketData.category,
        department: ticketData.department,
        priority: ticketData.priority,
        attachments: ticketData.attachments,  
      });
    }
  }
  

