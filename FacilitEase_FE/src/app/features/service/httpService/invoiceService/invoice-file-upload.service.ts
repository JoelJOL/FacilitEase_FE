// invoice-file-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InvoiceFileUploadService {
  private apiUrl = 'https://localhost:7049/api/Invoice/uploadInvoice';

  constructor(private http: HttpClient) {}

  uploadFile(file: File, ticketId: number) {
    const formData = new FormData();
    formData.append('file', file);
    const uploadUrl = `${this.apiUrl}/${ticketId}`;
    return this.http.post(uploadUrl, formData);
  }
}
