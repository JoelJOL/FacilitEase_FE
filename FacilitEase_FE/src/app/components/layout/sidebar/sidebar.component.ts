import { Component } from '@angular/core';

interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  fields: Field[] = [
    { logo: 'assets/tickets-icon.png', title: 'Employee Tickets' },
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
    // Add more fields as needed
  ];
}
