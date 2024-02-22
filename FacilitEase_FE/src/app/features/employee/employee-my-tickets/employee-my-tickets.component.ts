import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import {
  DepartmentHead,
  Employee,
  Manager,
  RaiseTicketForm,
  TicketDetails,
  Tickets,
  l1Admin,
  l2Admin,
  l3Admin,
} from 'environments/environment';

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
    const currentRoute = this.router.url;
    let targetRoute: string;
    console.log('Row clicked in parent component with ID:', rowId);
    if (currentRoute.includes(`${l2Admin}/${Tickets}`)) {
      targetRoute = `${l2Admin}/${TicketDetails}`;
    } else if (currentRoute.includes(`${Employee}/${Tickets}`)) {
      targetRoute = `${Employee}/${TicketDetails}`;
    } else if (currentRoute.includes(`${l3Admin}/${Tickets}`)) {
      targetRoute = `${l3Admin}/${TicketDetails}`;
    } else if (currentRoute.includes(`${l1Admin}/${Tickets}`)) {
      targetRoute = `${l1Admin}/${TicketDetails}`;
    } else if (currentRoute.includes(`${Manager}/${Tickets}`)) {
      targetRoute = `${Manager}/${TicketDetails}`;
    } else if (currentRoute.includes(`${DepartmentHead}/${Tickets}`)) {
      targetRoute = `${DepartmentHead}/${TicketDetails}`;
    } else {
      targetRoute = '**';
    }
    this.router.navigate([targetRoute, rowId]);
  }

  // Function to navigate to the ticket raising form
  raiseTicket() {
    const currentRoute = this.router.url;
    let targetRoute: string;
    if (currentRoute.includes(`${l2Admin}/${Tickets}`)) {
      targetRoute = `${l2Admin}/${RaiseTicketForm}`;
    } else if (currentRoute.includes(`${Employee}/${Tickets}`)) {
      targetRoute = `${Employee}/${RaiseTicketForm}`;
    } else if (currentRoute.includes(`${l3Admin}/${Tickets}`)) {
      targetRoute = `${l3Admin}/${RaiseTicketForm}`;
    } else if (currentRoute.includes(`${l1Admin}/${Tickets}`)) {
      targetRoute = `${l1Admin}/${RaiseTicketForm}`;
    } else if (currentRoute.includes(`${Manager}/${Tickets}`)) {
      targetRoute = `${Manager}/${RaiseTicketForm}`;
    } else if (currentRoute.includes(`${DepartmentHead}/${Tickets}`)) {
      targetRoute = `${DepartmentHead}/${RaiseTicketForm}`;
    } else {
      targetRoute = '**';
    }
    this.router.navigate([targetRoute]);
  }
}
