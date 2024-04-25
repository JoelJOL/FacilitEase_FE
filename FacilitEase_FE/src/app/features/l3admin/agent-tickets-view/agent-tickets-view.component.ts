import { Component, EventEmitter, Output } from '@angular/core';
import { AgentService } from '../../service/httpService/agentSerivce/agent.service';
import { Router } from '@angular/router';
import { ApprovalPendingTickets, AssignedTicketDetails, AssignedTickets, CancellationRequest, ResolvedTickets, l3Admin } from 'environments/environment';

@Component({
  selector: 'app-agent-tickets-view',
  templateUrl: './agent-tickets-view.component.html',
  styleUrls: ['./agent-tickets-view.component.css'],
})
export class AgentTicketsViewComponent {
  activeBox: number = 1;
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Submitted Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = '';
  constructor(private agentService: AgentService, private router: Router) { }
  ngOnInit() {
    this.apiLink = this.agentService.getAllTickets();
    console.log(this.apiLink);
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l3Admin}/${AssignedTicketDetails}`, Id]);
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
