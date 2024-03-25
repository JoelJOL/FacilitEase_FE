import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import {
  ApprovalPendingTickets,
  AssignedTickets,
  CancellationRequest,
  PendingAndResolvedTicketDetails,
  ResolvedTickets,
  l3Admin,
} from 'environments/environment';

@Component({
  selector: 'app-on-hold-tickets-view',
  templateUrl: './on-hold-tickets-view.component.html',
  styleUrls: ['./on-hold-tickets-view.component.css'],
})
export class OnHoldTicketsViewComponent {
  activeBox: number = 2;

  tickets: any = []; // Array to store on-hold tickets
  @Output() rowClicked = new EventEmitter<number>(); // Event emitter for emitting row clicks
  headers: string[] = [
    // Headers for the table displaying on-hold tickets
    'ID',
    'Ticket Name',
    'Employee Name',
    'Submitted Date',
    'Updated Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = ''; // API link for fetching all on-hold tickets
  constructor(private agentService: AgentService, private router: Router) { }
  ngOnInit() {
    // Get the API link for fetching all on-hold tickets
    this.apiLink = this.agentService.getAllOnHoldTickets();
    console.log(this.apiLink);
  }

  // Method called when a row is clicked
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l3Admin}/${PendingAndResolvedTicketDetails}`, Id]);
  }
  activateBox(boxNumber: number) {
    this.activeBox = boxNumber;
    if (this.activeBox === 1) {
      this.router.navigate([`${l3Admin}/${AssignedTickets}`]);
    } else if (this.activeBox === 4) {
      this.router.navigate([`${l3Admin}/${ResolvedTickets}`]);
    } else if (this.activeBox === 2) {
      this.router.navigate([`${l3Admin}/${ApprovalPendingTickets}`]);
    } else if (this.activeBox === 3) {
      this.router.navigate([`${l3Admin}/${CancellationRequest}`]);
    }
  }
}
