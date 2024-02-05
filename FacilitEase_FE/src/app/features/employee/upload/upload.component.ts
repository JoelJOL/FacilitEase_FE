import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Category,
  Department,
  Priority,
  TicketResponse,
} from '@app/features/Interface/interface';
import { GetAPIService } from '@app/features/service/httpService/GetAPI/get-api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  priorities: Priority[] = [];
  departments: Department[] = [];
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeUploadService: GetAPIService
  ) {
    this.uploadForm = this.fb.group({
      ticketName: [''],
      ticketDescription: [''],
      priorityId: [],
      departmentId: [],
      categoryId: [],
      file: [],
    });
  }

  ngOnInit(): void {
    this.loadPriorities();
    this.loadDepartments();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({
        file: file,
      });
    }
  }
  onCancelRequest(): void {
    this.uploadForm.reset();
  }

  // onSubmit() {
  //   if (this.uploadForm.valid) {
  //     const formData = new FormData();

  //     Object.keys(this.uploadForm.value).forEach((key) => {
  //       formData.append(key, this.uploadForm.value[key]);
  //     });

  //     this.employeeUploadService.uploadDocument(formData).subscribe(
  //       (event: HttpEvent<TicketResponse>) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           const progress = Math.round(
  //             (100 * event.loaded) / (event.total || 1)
  //           );
  //           console.log(`Upload Progress: ${progress}%`);
  //         } else if (event.type === HttpEventType.Response) {
  //           console.log('Upload successful', event.body);
  //         }
  //       },
  //       (error) => {
  //         console.error('Error uploading', error);
  //       }
  //     );
  //   } else {
  //     console.log('Error');
  //   }
  // }
  onSubmit() {
    if (this.uploadForm.valid) {
      const formData = new FormData();

      // Append form fields
      Object.keys(this.uploadForm.value).forEach((key) => {
        formData.append(key, this.uploadForm.value[key]);
      });

      // Append file
      formData.append(
        'file',
        this.uploadForm.get('file').value,
        this.uploadForm.get('file').name
      );

      // Make the HTTP request
      this.http
        .post(
          'https://localhost:7049/api/Employee/create-with-documents',
          formData
        )
        .subscribe(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress) {
              const progress = Math.round(
                (100 * event.loaded) / (event.total || 1)
              );
              console.log(`Upload Progress: ${progress}%`);
            } else if (event.type === HttpEventType.Response) {
              console.log('Upload successful', event.body);
              // You can handle the response here and update any UI accordingly.
              // For example, if your response contains image URLs, you can update the 'images' array.
              this.loadImages();
            }
          },
          (error) => {
            console.error('Error uploading', error);
          }
        );
    } else {
      console.log('Error: Form is not valid');
    }
  }
  loadPriorities(): void {
    this.employeeUploadService.getPriorities().subscribe(
      (data: Priority[]) => {
        this.priorities = data;
      },
      (error) => {
        console.error('Error fetching priorities:', error);
      }
    );
  }

  loadDepartments(): void {
    this.employeeUploadService.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }

  onDepartmentChange() {
    const departmentId = this.uploadForm.get('departmentId')?.value;

    if (departmentId) {
      this.employeeUploadService
        .getCategoriesByDepartmentId(departmentId)
        .subscribe(
          (data: Category[]) => {
            this.categories = data;
          },
          (error) => {
            console.error('Error fetching categories:', error);
          }
        );
    } else {
      this.categories = [];
    }
  }
}
