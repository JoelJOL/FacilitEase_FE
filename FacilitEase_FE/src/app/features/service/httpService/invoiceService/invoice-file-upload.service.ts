// invoice-file-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceFileUploadService {
  private apiUrl = environment.baseUrl+'/api/upload-invoice';

  constructor(private http: HttpClient) {}

  uploadFile(file: File, ticketId: number) {
    const formData = new FormData();
    formData.append('file', file);
    const uploadUrl = `${this.apiUrl}/${ticketId}`;
    return this.http.post(uploadUrl, formData);
  }
}
