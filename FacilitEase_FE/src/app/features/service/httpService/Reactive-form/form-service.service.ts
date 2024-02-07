import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private apiUrl = 'https://localhost:7049/api/Employee'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  submitFormData(data: any, headers: HttpHeaders): Observable<any> {
    return this.http.post<any>('https://localhost:7049/api/Employee', data, {
      headers,
    });
  }
}
