import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {
  WeekReport,
  profileData,
} from '@app/features/l2admin/L2AdminModel/model';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient, private azureService: AzureService) {}
  userId: number = 0;
  barChartCanvas!: HTMLElement;
  doughnutChartCanvas!: HTMLElement;

  GetReportData(id: number): Observable<any> {
    this.userId = this.azureService.userId;
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/${this.userId}`
    );
  }
  GetChartData(id: number): Observable<any> {
    this.userId = this.azureService.userId;
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/chartdata/${this.userId}`
    );
  }
  GetProfileData(id: number): Observable<profileData> {
    this.userId = this.azureService.userId;
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/profiledata/${this.userId}`
    );
  }
  GetWeekData(id: number): Observable<WeekReport> {
    this.userId = this.azureService.userId;
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/reportdata/${this.userId}`
    );
  }
}
