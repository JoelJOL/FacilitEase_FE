import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {
  CategoryReportData,
  CategoryReportDataRecieve,
  WeekReport,
  profileData,
} from '@app/features/l2admin/L2AdminModel/model';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = this.azureService.userId;
  barChartCanvas!: HTMLElement;
  doughnutChartCanvas!: HTMLElement;

  GetReportData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/${this.userId}`
    );
  }
  GetChartData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/chartdata/${this.userId}`
    );
  }
  GetProfileData(id: number): Observable<profileData> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/profiledata/${this.userId}`
    );
  }
  GetWeekData(): Observable<WeekReport> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/reportdata/${this.userId}`
    );
  }
  GetCategoryReportData(): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/categoryReport/${this.userId}`
    );
  }
}
