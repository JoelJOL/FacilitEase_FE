import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';
import { PostAPIService } from '@app/features/service/httpService/post-api.service';

@Component({
  selector: 'app-tr-form',
  templateUrl: './tr-form.component.html',
  styleUrls: ['./tr-form.component.css'],
})
export class TrFormComponent implements OnInit {
  priorities: any[] = [];
  categories: any[] = [];
  departments: any[] = [];
  ticketForm!: FormGroup;
  private apiUrl = 'https://localhost:7049/api/Employee/raise ticket';

  constructor(
    private apiService: DropDownService,
    private formBuilder: FormBuilder,
    private ticketService: PostAPIService
  ) {}

  ticket: any = {
    subject: '',
    description: '',
    category: '',
    department: '',
    priority: '',
    attachments: [],
  };

  ngOnInit(): void {
    this.apiService.getPriorities().subscribe((data) => {
      this.priorities = data;
    });

    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.apiService.getDepartments().subscribe((data) => {
      this.departments = data;
    });

    this.ticketForm = this.formBuilder.group({
      subject: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      category: ['', Validators.required],
      department: ['', Validators.required],
      attachments: [[]],
    });
  }

  onSubmit() {
    console.log('API URL:', this.apiUrl);
    console.log('Form Value:', this.ticketForm.value);

    if (this.ticketForm.valid) {
      // Assign form values to the ticket object
      this.ticket.subject = this.ticketForm.get('subject')?.value;
      this.ticket.description = this.ticketForm.get('description')?.value;
      this.ticket.priority = this.ticketForm.get('priority')?.value;
      this.ticket.category = this.ticketForm.get('category')?.value;
      this.ticket.department = this.ticketForm.get('department')?.value;
      // Assuming you have an attachments field in the ticket object
      this.ticket.attachments = this.ticketForm.get('attachments')?.value;

      // Call the service method to post the ticket data
      this.ticketService.postUser(this.apiUrl).subscribe(
        (response) => {
          console.log('Ticket submitted successfully:', response);
          alert('Ticket submitted successfully:');
        },
        (error) => {
          console.error('Error submitting ticket:', error);
          // Handle error actions here
        }
      );
    } else {
      this.markFormGroupTouched(this.ticketForm);
    }
  }

  onReset() {
    this.ticketForm.reset();
  }

  onFileChange(event: any): void {
    const files = event.target.files;

    // Check if 'attachments' control exists in the form
    const attachmentsControl = this.ticketForm.get('attachments');
    if (attachmentsControl) {
      attachmentsControl.setValue(files);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
