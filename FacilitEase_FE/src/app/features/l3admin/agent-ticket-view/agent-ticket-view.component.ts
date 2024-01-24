import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agent.service';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css']
})
export class AgentTicketViewComponent {
  customHeaderText = 'Supported Attachments'; 
  
}
