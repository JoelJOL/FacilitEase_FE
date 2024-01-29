import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css'],
})
export class TicketInfoComponent {
  ticketId: string = ''; // Replace with actual data
  ticketPriority: string = '';
  status: string = '';
  ticket: any = [];
  @Input() ticketDetails: any;
  constructor(private agentService: AgentService) {}

  getPriorityColor(): string {
    if (this.ticketDetails && this.ticketDetails.priorityName) {
      switch (this.ticketDetails.priorityName.toLowerCase()) {
        case 'high':
          return 'red';
        case 'medium':
          return 'orange';
        case 'low':
          return 'green';
        default:
          return 'black';
      }
    } else {
      return 'black';
    }
  }
}
