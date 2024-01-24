import { Component } from '@angular/core';
import { EmployeeBulkuploadService } from '@app/features/service/httpService/employee-bulkupload.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  fileOverBase($event: Event) {
    throw new Error('Method not implemented.');
  }
  public uploader: FileUploader;
  hasBaseDropZoneOver: any;

  constructor(private employeeBulkuploadService: EmployeeBulkuploadService) {
    this.uploader = this.employeeBulkuploadService.createUploader();
    this.uploader.onAfterAddingFile = (fileItem) =>
      this.employeeBulkuploadService.onAfterAddingFile(fileItem);
  }

  uploadFiles() {
    this.employeeBulkuploadService.uploadFiles(this.uploader).subscribe(
      (response) => {
        console.log('Upload successful:', response);
        // Perform additional actions after successful upload
      },
      (error) => {
        console.error('Error uploading files:', error);
        // Handle errors appropriately
      }
    );
  }
}
