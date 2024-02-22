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
    const currentRoute = this.router.url;
    let targetRoute: string;
    console.log('Row clicked in parent component with ID:', rowId);
    if (currentRoute.includes('l2admin/my-tickets')) {
      targetRoute = 'l2admin/request';
    } else if (currentRoute.includes('employee/my-tickets')) {
      targetRoute = 'l2admin/request';
    } else if (currentRoute.includes('l3admin/my-tickets')) {
      targetRoute = 'l3admin/request';
    } else if (currentRoute.includes('l1admin/my-tickets')) {
      targetRoute = 'l1admin/request';
    } else if (currentRoute.includes('manager/my-tickets')) {
      targetRoute = 'manager/request';
    } else if (currentRoute.includes('departmenthead/my-tickets')) {
      targetRoute = 'departmenthead/request';
    } else {
      targetRoute = '**';
    }
    this.router.navigate([targetRoute, rowId]);
  }

  // Function to navigate to the ticket raising form
  raiseTicket() {
    const currentRoute = this.router.url;
    let targetRoute: string;
    if (currentRoute.includes('l2admin/my-tickets')) {
      targetRoute = 'l2admin/form';
    } else if (currentRoute.includes('employee/my-tickets')) {
      targetRoute = 'l2admin/form';
    } else if (currentRoute.includes('l3admin/my-tickets')) {
      targetRoute = 'l3admin/form';
    } else if (currentRoute.includes('l1admin/my-tickets')) {
      targetRoute = 'l1admin/form';
    } else if (currentRoute.includes('manager/my-tickets')) {
      targetRoute = 'manager/form';
    } else if (currentRoute.includes('departmenthead/my-tickets')) {
      targetRoute = 'departmenthead/form';
    } else {
      targetRoute = '**';
    }
    this.router.navigate([targetRoute]);
  }
}
