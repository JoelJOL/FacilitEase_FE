import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css'],
})
export class TicketDescriptionComponent {
  ticket: any = [];
  @Input() ticketDetails: any;
  ngOnChanges() {
    console.log(this.ticketDetails);
  }
  constructor(private agentService: AgentService) {}
}
