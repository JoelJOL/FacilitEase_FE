import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeBulkuploadService } from '@app/features/service/httpService/Employee-bulkUpload/employee-bulkupload.service';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFileName: string = '';

  constructor(private employeeBulkuploadService: EmployeeBulkuploadService) {}

  onFileSelected(event: any) {
    const file = event.target.files?.[0]; // Use optional chaining to handle potential undefined
    if (file) {
      this.selectedFileName = file.name; // Set the selected file name
    }
  }

  onDrop(event: any) {
    event.preventDefault();
    const files = event?.dataTransfer?.files;
    this.selectedFileName = files?.[0]?.name || '';
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  upload() {
    if (this.selectedFileName) {
      const fileInput = document.getElementById(
        'fileInput'
      ) as HTMLInputElement;
      const file = fileInput.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const data = new Uint8Array(e.target.result);
          try {
            const workbook = XLSX.read(data, { type: 'array' });

            if (workbook.SheetNames.length > 0) {
              const worksheet = workbook.Sheets[workbook.SheetNames[0]];
              const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                header: 1,
                raw: false,
              });

              if (Array.isArray(jsonData) && jsonData.length > 1) {
                const employeesData = jsonData.slice(1).map((row: any) => ({
                  employeeCode: row[0],
                  firstName: row[1],
                  lastName: row[2],
                  dob: {
                    year: Number(row[3].split('/')[2]),
                    month: Number(row[3].split('/')[1]),
                    day: Number(row[3].split('/')[0]),
                    dayOfWeek: new Date(row[3]).getDay(),
                  },
                  email: row[4],
                  gender: row[5],
                  managerId: Number(row[6]),
                  departmentId: Number(row[7]),
                  positionId: Number(row[8]),
                  locationId: Number(row[9]),
                }));

                console.log('Data after conversion:', jsonData);

                // Parse the JSON string to an object
                const dataObject = JSON.parse(JSON.stringify(employeesData));

                // Access the 'employees' property of the object
                const employeesArray = dataObject;

                this.postData(employeesArray);
              } else {
                console.error('Invalid data in the workbook.');
              }
            } else {
              console.error('No sheets found in the workbook.');
            }
          } catch (error) {
            console.error('Error reading workbook:', error);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }

  postData(data: any) {
    return this.employeeBulkuploadService.postData(data).subscribe(
      (response) => {
        console.log('Success:', response);
        this.selectedFileName = '';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
