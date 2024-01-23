import { Component } from '@angular/core';
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
  constructor(private agentService: AgentService) {}
  ngOnInit() {
    this.agentService.getData().subscribe((data) => {
      this.ticket = data[0];
      // Assuming you want to display the first ticket
      console.log(data);
      this.ticketId = this.ticket.id;
      this.ticketPriority = this.ticket.priorityName;
      this.status = this.ticket.statusName;
    });
  }
}
