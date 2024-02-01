import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tr-form',
  templateUrl: './tr-form.component.html',
  styleUrls: ['./tr-form.component.css'],
})
export class TrFormComponent implements OnInit {
  ticketForm!: FormGroup;
  departments: any[] = [];
  categories: any[] = [];
  priorities: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initForm();
    this.loadDepartments();
    this.loadPriorities();
  }

  initForm() {
    this.ticketForm = this.fb.group({
      subject: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      department: ['', Validators.required],
      category: ['', Validators.required],
      attachments: [''],
    });
  }

  loadDepartments() {
    this.http
      .get('https://localhost:7049/api/Employee/departments')
      .subscribe((data: any) => {
        this.departments = data;
      });
  }

  onDepartmentChange() {
    const departmentId = this.ticketForm.get('department')?.value;

    if (departmentId) {
      this.http
        .get(
          `https://localhost:7049/api/Employee/GetCategoryByDepartmentId/${departmentId}`
        )
        .subscribe((data: any) => {
          this.categories = data;
        });
    } else {
      this.categories = [];
    }
  }

  loadPriorities() {
    this.http
      .get('https://localhost:7049/api/Employee/priorities')
      .subscribe((data: any) => {
        this.priorities = data;
      });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      // Convert documentLink to an array if it's not already
      const documentLinkValue = this.ticketForm.get('attachments')?.value;
      const documentLinkArray = Array.isArray(documentLinkValue)
        ? documentLinkValue
        : [documentLinkValue];

      // Use the subject as TicketName
      const payload = {
        ticketName: this.ticketForm.get('subject')?.value,
        ticketDescription: this.ticketForm.get('description')?.value,
        priorityId: this.ticketForm.get('priority')?.value,
        categoryId: this.ticketForm.get('category')?.value,
        departmentId: this.ticketForm.get('department')?.value,
        documentLink: documentLinkArray,
      };

      this.http
        .post('https://localhost:7049/api/Employee/raiseticket', payload)
        .subscribe(
          (response) => {
            console.log('Ticket submitted successfully', response);
            // Handle success, e.g., display a success message to the user
          },
          (error) => {
            console.error('Error submitting ticket', error);
            // Handle error, e.g., display an error message to the user
          }
        );
    } else {
      // Handle invalid form, e.g., display validation errors to the user
    }
  }

  onReset() {
    this.ticketForm.reset();
  }
}
