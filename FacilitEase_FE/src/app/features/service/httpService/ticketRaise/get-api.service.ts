import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Category,
  Department,
  Priority,
  TicketResponse,
} from '@app/features/Interface/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAPIService {
  private baseUrl = 'https://localhost:7049/api/Employee';

  constructor(private http: HttpClient) {}

  getPriorities(): Observable<Priority[]> {
    return this.http.get<Priority[]>(`${this.baseUrl}/priorities`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`);
  }

  getCategoriesByDepartmentId(departmentId: number): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.baseUrl}/GetCategoryByDepartmentId/${departmentId}`
    );
  }

  uploadDocument(formData: FormData): Observable<HttpEvent<TicketResponse>> {
    return this.http.post<TicketResponse>(
      `${this.baseUrl}/create-with-documents`,
      formData,
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  cancelRequest(ticketId: number): Observable<TicketResponse> {
    const url = `${this.baseUrl}/cancel-request/${ticketId}`;
    return this.http.patch<TicketResponse>(url, null);
  }

  getDocumentPath(ticketId: number): Observable<any[]> {
    const url = `${this.baseUrl}/get-documents-by-ticket/${ticketId}`;
    return this.http.get<any[]>(url);
  }
}
