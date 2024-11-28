import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private apiUrl = environment.baseUrl+'/api/Employee'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  submitFormData(data: any, headers: HttpHeaders): Observable<any> {
    return this.http.post<any>(environment.baseUrl+'/api/Employee', data, {
      headers,
    });
  }
}
