import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-header',
  templateUrl: './ticket-header.component.html',
  styleUrls: ['./ticket-header.component.css'],
})
export class TicketHeaderComponent {
  @Input() header: string = '';
}
