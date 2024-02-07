import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/ticket-details'; 

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
  constructor() {}
}
