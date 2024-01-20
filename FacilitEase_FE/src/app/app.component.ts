import { Component } from '@angular/core';
interface Field {
  logo: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FaciltEase_FE';
  fields: Field[] = [
    { logo: 'assets/tickets-icon.png', title: 'Employee Tickets' },
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },

    // Add more fields as needed
  ];
}
