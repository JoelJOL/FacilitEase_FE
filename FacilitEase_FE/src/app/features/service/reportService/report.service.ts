import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}
  GetReportData(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7049/api/L3AdminReprt/${id}`);
  }
  GetChartData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReprt/chartdata/${id}`
    );
  }
  GetProfileData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReprt/profiledata/${id}`
    );
  }
}
