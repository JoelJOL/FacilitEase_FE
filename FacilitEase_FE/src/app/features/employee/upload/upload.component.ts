import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

import {
  Category,
  Priority,
  TicketResponse,
} from '@app/features/l3admin/l3Models/model';
import { GetAPIService } from '@app/features/service/httpService/ticketRaise/get-api.service';
import { ToastrService } from 'ngx-toastr';

// Validator function to check maximum word limit in textarea
function maxWordsValidator(maxWords: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Check and validate word count in textarea
    if (!control.value) {
      return null; // If the control is empty, consider it valid
    }

    const wordCount = control.value.trim().split(/\s+/).length;
    return wordCount > maxWords ? { maxWords: true } : null;
  };
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  // Form group for ticket upload
  uploadForm: FormGroup;

  // Arrays to store priorities and categories
  priorities: Priority[] = [];
  categories: Category[] = [];

  // Success message to display on successful ticket submission
  successMessage: string = '';

  // Constructor initializes form controls and sets up validations
  constructor(
    private fb: FormBuilder,
    private employeeUploadService: GetAPIService,
    private http: HttpClient,
    private azureService: AzureService,
    private toastr: ToastrService
  ) {
    // Form group initialization with validations
    this.uploadForm = new FormGroup({
      ticketDescription: new FormControl('', [
        Validators.required,
        maxWordsValidator(300),
      ]),
      priorityId: new FormControl('', Validators.required),
      departmentId: new FormControl(1),
      categoryId: new FormControl('', Validators.required),
      file: new FormControl(null),
      UserId: new FormControl(19),
      CreatedBy: new FormControl(19),
      UpdatedBy: new FormControl(19),
    });
  }

  // User ID obtained from Azure service
  userId: number = this.azureService.userId;

  // Lifecycle hook: Executes when the component is initialized
  ngOnInit(): void {
    // Load priorities and categories
    this.loadPriorities();
    this.loadCategories();

    // Patch default values into the form
    this.uploadForm.patchValue({
      UserId: this.userId,
      CreatedBy: this.userId,
      UpdatedBy: this.userId,
      departmentId: 1,
    });
  }

  // Function to load categories from the API
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

  // Event handler for file input change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({
        file: file,
      });
    }
  }

  // Function to reset the form on cancel
  onCancelRequest(): void {
    this.uploadForm.reset();
  }

  // Function to handle form submission
  onSubmit() {
    console.log('Submit button clicked');

    // Check if categoryId has a value
    const isCategoryIdValid = this.uploadForm.get('categoryId')?.value !== null;

    if (isCategoryIdValid) {
      // Create FormData for file upload
      const formData = new FormData();

      // Append form values to FormData
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

      // Append the file if present
      const file = this.uploadForm.get('file')?.value;
      if (file !== null) {
        formData.append('file', file, file.name);
      }

      // Append user-related details
      formData.append('UserId', `${this.userId}`);
      formData.append('CreatedBy', `${this.userId}`);
      formData.append('UpdatedBy', `${this.userId}`);
      formData.append('DepartmentId', '1');

      // Submit FormData to the API for ticket creation
      this.employeeUploadService.uploadDocument(formData).subscribe(
        (event: HttpEvent<TicketResponse>) => {
          // Handle different event types during the upload process
          if (event.type === HttpEventType.UploadProgress) {
            const progress = Math.round(
              (100 * event.loaded) / (event.total || 1)
            );
            console.log(`Upload Progress: ${progress}%`);
          } else if (event.type === HttpEventType.Response) {
            console.log('Upload successful', event.body);

            this.toastr.success('Ticket created successfully!', 'Success');
            setTimeout(() => {
              this.uploadForm.reset();
            }, 2000);
          }
        },
        (error) => {
          console.error('Error uploading', error);
        }
      );
    } else {
      // Alert if categoryId is not valid
      alert('Fill the required fields');
    }
  }

  // Function to load priorities from the API
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
