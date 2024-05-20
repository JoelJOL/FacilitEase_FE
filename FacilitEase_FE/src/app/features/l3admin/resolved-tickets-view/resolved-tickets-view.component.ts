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
  selector: 'app-resolved-tickets-view',
  templateUrl: './resolved-tickets-view.component.html',
  styleUrls: ['./resolved-tickets-view.component.css'],
})
export class ResolvedTicketsViewComponent {
  activeBox: number = 4;

  tickets: any = [];
  @Output() rowClicked = new EventEmitter<number>();
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Employee Name',
    'Submitted Date',
    'Resolved Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = '';
  constructor(private agentService: AgentService, private router: Router) { }
  ngOnInit() {
    this.apiLink = this.agentService.getAllResolvedTickets();
    console.log(this.apiLink);
  }
  // viewTicket() {
  //   this.router.navigate(['/agentticket']);
  // }

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
