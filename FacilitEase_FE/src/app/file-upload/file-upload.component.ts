import { Component } from '@angular/core';
import { EmployeeBulkuploadService } from '@app/features/service/httpService/employee-bulkupload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  constructor(private employeeBulkuploadService: EmployeeBulkuploadService) {}

  onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      this.employeeBulkuploadService.postData(data).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    };
    reader.readAsArrayBuffer(files[0]);
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDragLeave(event: any) {
    event.preventDefault();
  }
}
