import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private apiService: DropDownService,
    private formBuilder: FormBuilder,
    private ticketService: PostAPIService
  ) {}

  ticket: any = {
    TicketName: '',
    TicketDescription: '',
    PriorityId: '',
    CategoryId: '',
    DepartmentId: '',
    Attachments: [],
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

    this.ticketForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      attachments: new FormControl([]),
    });
  }

  
    onSubmit() {
      console.log('Form Value:', this.ticketForm.value);
    
      if (this.ticketForm.valid) {
        // Assign form values to the ticket object with correct field names
        this.ticket.TicketName = this.ticketForm.get('subject')?.value;
        this.ticket.TicketDescription = this.ticketForm.get('description')?.value;
        this.ticket.PriorityId = this.ticketForm.get('priority')?.value;
        this.ticket.CategoryId = this.ticketForm.get('category')?.value;
        this.ticket.DepartmentId = this.ticketForm.get('department')?.value;
    
        // Assuming you have an attachments field in the ticket object
        this.ticket.DocumentLink = [this.ticketForm.get('attachments')?.value];
    
        // Call the service method to post the ticket data
        this.ticketService.postUser(this.ticket).subscribe(
          (response) => {
            console.log('Ticket submitted successfully:', response);
            alert('Ticket submitted successfully:');
          },
          (error) => {
            console.error('Error submitting ticket:', error);
            // Handle error actions here
          }
        );
      } 
    }

    onReset(){
      this.ticketForm.reset;
    }
  }