import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropDownService {
  constructor(private http: HttpClient) {}

  getAgents(): Observable<any> {
    const userIdGetAgents = 2;
    return this.http.get(
      `https://localhost:7049/api/l2/agents/${userIdGetAgents}`
    );
  }

  getMyTickets(userId: number): string {
    return `https://localhost:7049/api/Employee/tickets/${userId}`;
  }
}
