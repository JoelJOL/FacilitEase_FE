import { Component } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css'],
})
export class TicketDescriptionComponent {
  ticket: any = [];
  constructor(private agentService: AgentService) {}
  ngOnInit() {
    this.agentService.getData().subscribe((data) => {
      this.ticket = data[0];
      console.log(data);
    });
  }
}
