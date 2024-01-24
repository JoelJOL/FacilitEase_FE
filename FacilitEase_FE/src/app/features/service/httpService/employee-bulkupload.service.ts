import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class EmployeeBulkuploadService {
  constructor(private http: HttpClient) {}

  postData(data: any) {
    const workbook = XLSX.read(data, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    return this.http.post('your-api-url', jsonData);
  }
}
