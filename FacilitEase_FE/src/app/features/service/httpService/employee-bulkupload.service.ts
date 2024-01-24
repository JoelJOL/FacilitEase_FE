import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeBulkuploadService {
  private uploadUrl = 'https://your-dotnet-core-api-url/api/employees/upload'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  createUploader(): FileUploader {
    return new FileUploader({ url: this.uploadUrl, itemAlias: 'file' });
  }

  uploadFiles(_uploader: FileUploader): Observable<any> {
    return this.http.post(this.uploadUrl, null); // You may need to pass additional data if required
  }

  onAfterAddingFile(fileItem: FileItem): void {
    // Perform actions after adding a file (if needed)
    console.log('File added:', fileItem.file.name);
  }
}
