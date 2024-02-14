// import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';

// import {
//   Category,
//   Department,
//   Priority,
//   TicketResponse,
// } from '@app/features/Interface/interface';
// import { GetAPIService } from '@app/features/service/httpService/ticketRaise/get-api.service';

// @Component({
//   selector: 'app-upload',
//   templateUrl: './upload.component.html',
//   styleUrls: ['./upload.component.css'],
// })
// export class UploadComponent implements OnInit {
//   uploadForm: FormGroup;
//   priorities: Priority[] = [];
//   departments: Department[] = [];
//   categories: Category[] = [];
//   successMessage: string = '';
//   constructor(
//     private fb: FormBuilder,
//     private employeeUploadService: GetAPIService,
//     private http: HttpClient
//   ) {
//     this.uploadForm = new FormGroup({
//       ticketName: new FormControl('', Validators.required),
//       ticketDescription: new FormControl('', Validators.required),
//       priorityId: new FormControl('', Validators.required),
//       departmentId: new FormControl('', Validators.required),
//       categoryId: new FormControl('', Validators.required),
//       file: new FormControl(null),
//       UserId: new FormControl(19),
//       CreatedBy: new FormControl(19),
//       UpdatedBy: new FormControl(19),
//     });
//   }

//   ngOnInit(): void {
//     this.loadPriorities();
//     this.loadDepartments();
//     this.uploadForm.patchValue({
//       UserId: 19,
//       CreatedBy: 19,
//       UpdatedBy: 19,
//     });
//   }

//   onFileChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       this.uploadForm.patchValue({
//         file: file,
//       });
//     }
//   }
//   onCancelRequest(): void {
//     this.uploadForm.reset();
//   }

//   onSubmit() {
//     if (this.uploadForm.valid) {
//       const formData = new FormData();

//       Object.keys(this.uploadForm.value).forEach((key) => {
//         const value = this.uploadForm.value[key];

//         if (key === 'file' && value !== null) {
//           formData.append(key, value);
//         } else {
//           formData.append(key, value);
//         }
//       });

//       this.employeeUploadService.uploadDocument(formData).subscribe(
//         (event: HttpEvent<TicketResponse>) => {
//           if (event.type === HttpEventType.UploadProgress) {
//             const progress = Math.round(
//               (100 * event.loaded) / (event.total || 1)
//             );
//             console.log(`Upload Progress: ${progress}%`);
//           } else if (event.type === HttpEventType.Response) {
//             console.log('Upload successful', event.body);
//             this.successMessage = 'Ticket created successfully';
//             setTimeout(() => {
//               this.uploadForm.reset();
//             }, 3000);
//           }
//         },
//         (error) => {
//           console.error('Error uploading', error);
//         }
//       );
//     } else {
//       alert('All fields are required. Please fill in all the required fields.');
//     }
//   }

//   loadPriorities(): void {
//     this.employeeUploadService.getPriorities().subscribe(
//       (data: Priority[]) => {
//         this.priorities = data;
//       },
//       (error) => {
//         console.error('Error fetching priorities:', error);
//       }
//     );
//   }

//   loadDepartments(): void {
//     this.employeeUploadService.getDepartments().subscribe(
//       (data: Department[]) => {
//         this.departments = data;
//       },
//       (error) => {
//         console.error('Error fetching departments:', error);
//       }
//     );
//   }

//   onDepartmentChange() {
//     const departmentId = this.uploadForm.get('departmentId')?.value;

//     if (departmentId) {
//       this.employeeUploadService
//         .getCategoriesByDepartmentId(departmentId)
//         .subscribe(
//           (data: Category[]) => {
//             this.categories = data;
//           },
//           (error) => {
//             console.error('Error fetching categories:', error);
//           }
//         );
//     } else {
//       this.categories = [];
//     }
//   }
// }
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

import {
  Category,
  Priority,
  TicketResponse,
} from '@app/features/l3admin/l2Models/model';
import { GetAPIService } from '@app/features/service/httpService/ticketRaise/get-api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  priorities: Priority[] = [];
  categories: Category[] = [];
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeUploadService: GetAPIService,
    private http: HttpClient,
    private azureService: AzureService
  ) {
    this.uploadForm = this.fb.group({
      //ticketName: new FormControl('', Validators.required),
      ticketDescription: new FormControl('', Validators.required),
      priorityId: new FormControl('', Validators.required),
      departmentId: new FormControl(1),
      categoryId: new FormControl('', Validators.required),
      file: new FormControl(null),
      UserId: new FormControl(19),
      CreatedBy: new FormControl(19),
      UpdatedBy: new FormControl(19),
    });
  }
  userId: number = this.azureService.userId;
  ngOnInit(): void {
    this.loadPriorities();
    this.loadCategories();
    this.uploadForm.patchValue({
      UserId: this.userId,
      CreatedBy: this.userId,
      UpdatedBy: this.userId,
      departmentId: 1,
    });
  }

  loadCategories(): void {
    this.employeeUploadService.getCategoriesForFacilitiease().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
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
  onSubmit() {
    console.log('button clicked');

    // Check if categoryId has a value
    const isCategoryIdValid = this.uploadForm.get('categoryId')?.value !== null;

    if (isCategoryIdValid) {
      const formData = new FormData();

      formData.append(
        'ticketDescription',
        this.uploadForm.get('ticketDescription')?.value || ''
      );
      formData.append(
        'priorityId',
        this.uploadForm.get('priorityId')?.value || ''
      );
      formData.append(
        'categoryId',
        this.uploadForm.get('categoryId')?.value || ''
      );

      // Append the file separately if file input is required
      const file = this.uploadForm.get('file')?.value;
      if (file !== null) {
        formData.append('file', file, file.name);
      }

      formData.append('UserId', `${this.userId}`);
      formData.append('CreatedBy', `${this.userId}`);
      formData.append('UpdatedBy', `${this.userId}`);
      formData.append('DepartmentId', '1');

      this.employeeUploadService.uploadDocument(formData).subscribe(
        (event: HttpEvent<TicketResponse>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const progress = Math.round(
              (100 * event.loaded) / (event.total || 1)
            );
            console.log(`Upload Progress: ${progress}%`);
          } else if (event.type === HttpEventType.Response) {
            console.log('Upload successful', event.body);
            this.successMessage = 'Ticket created successfully';
            setTimeout(() => {
              this.uploadForm.reset();
            }, 3000);
          }
        },
        (error) => {
          console.error('Error uploading', error);
        }
      );
    } else {
      alert('Category is required. Please select a category.');
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
}
