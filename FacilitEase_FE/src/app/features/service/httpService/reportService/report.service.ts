import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {
  WeekReport,
  profileData,
} from '@app/features/l2admin/L2AdminModel/model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  barChartCanvas!: HTMLElement;
  doughnutChartCanvas!: HTMLElement;

  GetReportData(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7049/api/L3AdminReport/5`);
  }
  GetChartData(id: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/chartdata/5`,
      {
        headers: new HttpHeaders({
          token:
            'eyJ0eXAiOiJKV1QiLCJub25jZSI6Ikw2bmRqOVh5ekd1WG93dFJ3VW42ZDdtVHlodl80NEpmSnBzOUdwaXprMW8iLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81Yjc1MTgwNC0yMzJmLTQxMGQtYmIyZi03MTRlM2JiNDY2ZWIvIiwiaWF0IjoxNzA2MTU2MTA5LCJuYmYiOjE3MDYxNTYxMDksImV4cCI6MTcwNjE2MTc5MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQWg2RkxsZ3pvWGtwaElMZThSZnFBbTF6bitZNHhGZGkyV3dWTmxKN1U4TlprY0VQa2NnTHFvVU05OGp4MnprcDciLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkZhY2lsaXRFYXNlIiwiYXBwaWQiOiJkNzEwNGY4NC1hYjI5LTQzNmYtOGYwNi04MmZjZjhkODEzODEiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikpvc2UiLCJnaXZlbl9uYW1lIjoiSm9lbCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy43OS4yMjMuMTgiLCJuYW1lIjoiSm9lbCBKb3NlIiwib2lkIjoiZDUzODUxNWQtMjE1ZS00NDQyLWFmMGEtYjVjMTI0NWQ4NjM2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAzNDUxMjBCQzQiLCJyaCI6IjAuQVVrQUJCaDFXeThqRFVHN0wzRk9PN1JtNndNQUFBQUFBQUFBd0FBQUFBQUFBQUJKQUl3LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ijk3VkZ6RE95WElVUkxxNmhvLW9SUEFfUGZ4a1lhOUtxWDZPOGF5RDEzbWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1Yjc1MTgwNC0yMzJmLTQxMGQtYmIyZi03MTRlM2JiNDY2ZWIiLCJ1bmlxdWVfbmFtZSI6ImpvZWxfam9zZUBzcmVlZ2Nsb3VkZ21haWwub25taWNyb3NvZnQuY29tIiwidXBuIjoiam9lbF9qb3NlQHNyZWVnY2xvdWRnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJBODZmWmVyVDgwbXhMVmFiYVdyUUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IjA1anlwZkYxd1hnUURJZk9kdm5sa0d3NjVudDRBYVEwR2xrTVRkVkltSkEifSwieG1zX3RjZHQiOjE1MjQ1NTIyNDF9.Of-Ut49ONaGhDVc6UxuprZKWT2JkSPSQbm7WIZd6aek4eAaZJMRaAuupYtFdsum0402Nw7_q3GkcH6G5TLwhJ7fw5_nENgYMnz8jVh0ymNj5Saj01_eDClW8r9ZSKQs8rBdB-P-tvZKBdiJmLHQ9cxqWSbk55ltjY-z9oUoUCekC5K9O8NAmQn63I-jSf7Ygpbxx6jGVTfYlC4tmq14dV0rJwnkw29Xr_NMBOWKfCgsCCoHuGPzidTqR7UCRmmOlv_U4DZaIBztGStVoszwz6TKXz2zQPgZ5mVLMSEbl4nJt0JdkXkEUYbJ9Mp6G64zLDItsreBS7Uay-FYu3dA1_A',
        }),
      }
    );
  }
  GetProfileData(id: number): Observable<profileData> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/profiledata/5`
    );
  }
  GetWeekData(id: number): Observable<WeekReport> {
    return this.http.get<any>(
      `https://localhost:7049/api/L3AdminReport/reportdata/${id}`
    );
  }
}
