import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  WeekReport,
  profileData,
} from '@app/features/l2admin/L2AdminModel/model';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { RESPONSE_TYPE } from '@azure/msal-common/dist/constants/AADServerParamKeys';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient, private azureService: AzureService) { }
  userId: number = this.azureService.userId;
  barChartCanvas!: HTMLElement;
  doughnutChartCanvas!: HTMLElement;

  GetReportData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/${this.userId}`
    );
  }
  GetChartData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/chartdata/${this.userId}`
    );
  }
  GetProfileData(id: number): Observable<profileData> {
    return this.http.get<any>(
      `https://localhost:7049/api/profiledata/${this.userId}`
    );
  }
  GetWeekData(): Observable<WeekReport> {
    return this.http.get<any>(
      `https://localhost:7049/api/reportdata/${this.userId}`
    );
  }
  GetCategoryReportData(): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/categoryReport/${this.userId}`
    );
  }
  downloadExcel(): Observable<any> {
    return this.http.get(
      'https://localhost:7049/api/exportdata',
      { responseType: 'blob' as 'json' }
    );
  }
}
