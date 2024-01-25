import { ApproveDenyService } from '@app/features/service/httpService/approve-deny.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
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
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
  ];

  constructor(private approveDenyService: ApproveDenyService) {}

  updateTicket(isApproved: boolean): void {
    const ticketId = prompt('Enter Ticket ID:');
    if (ticketId) {
      this.approveDenyService.updateTicket(ticketId, isApproved).subscribe(
        () => {
          console.log('Ticket updated successfully');
        },
        (error) => {
          console.error('Error updating ticket', error);
        }
      );
    }
  }
}
