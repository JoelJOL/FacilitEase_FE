import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeBulkuploadService {
  private url = 'https://localhost:7049/api/Employee/AddEmployees';

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.url, data);
  }
}
