import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import {
  CancellationRequestTicketDetails,
  l3Admin,
} from 'environments/environment';

@Component({
  selector: 'app-cancel-request-view-all',
  templateUrl: './cancel-request-view-all.component.html',
  styleUrls: ['./cancel-request-view-all.component.css'],
})
export class CancelRequestViewAllComponent {
  tickets: any = []; // Array to store cancel request tickets
  @Output() rowClicked = new EventEmitter<number>(); // Event emitter for emitting row click

  // Headers for the table displaying cancel request tickets
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Raised Date',
    'Requested Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = ''; // API link for fetching all cancel request tickets
  constructor(private agentService: AgentService, private router: Router) {}

  // Lifecycle hook called after Angular initializes the component
  ngOnInit() {
    // Get the API link for fetching all cancel request tickets
    this.apiLink = this.agentService.getAllCancelRequestTickets();
    console.log(this.apiLink);
  }

  // Method called when a row is clicked
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([
      `${l3Admin}/${CancellationRequestTicketDetails}`,
      Id,
    ]);
  }
}
