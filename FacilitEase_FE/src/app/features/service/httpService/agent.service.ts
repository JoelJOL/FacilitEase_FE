import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient){}
  getData(ticketId:number): Observable<any> {
    const apiUrl = `https://localhost:7049/api/L3Admin/ticketdetail-by-agent/${ticketId}`;
    return this.http.get(apiUrl);
  }
  
    getAllTickets():Observable<any>{
      const agentId = 3;
    const apiUrl = `https://localhost:7049/api/L3Admin/ticketdetails-by-agent/${agentId}`;
    return this.http.get(apiUrl);
}
}

