import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeBulkuploadService {
  private url = environment.baseUrl+'/api/Employee/AddEmployees';

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.url, data);
  }
}
