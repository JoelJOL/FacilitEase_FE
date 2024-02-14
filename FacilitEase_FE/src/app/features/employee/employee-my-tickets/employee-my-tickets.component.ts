import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';

@Component({
  selector: 'app-employee-my-tickets',
  templateUrl: './employee-my-tickets.component.html',
  styleUrls: ['./employee-my-tickets.component.css'],
})
export class EmployeeMyTicketsComponent {
  // Constructor with injected services
  constructor(private masterService: DropDownService, private router: Router) {}

  // Table headers for ticket information
  headers: string[] = [
    'Ticket ID',
    'Ticket Name',
    'Status',
    'Assigned To',
    'Priority',
    'Submitted Date',
  ];

  // API link for fetching employee's tickets
  apiLink: string = '';

  ngOnInit(): void {
    // Fetch the API link for employee's tickets from masterService
    this.apiLink = this.masterService.getMyTickets();
  }

  // Function triggered when a table row is clicked
  onRowClicked(rowId: any) {
    // Log the clicked row ID and navigate to the detailed view
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate(['employee/request', rowId]);
  }

  // Function to navigate to the ticket raising form
  raiseTicket() {
    this.router.navigate(['employee/form']);
  }
}
