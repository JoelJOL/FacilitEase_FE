import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-attachments',
  templateUrl: './ticket-attachments.component.html',
  styleUrls: ['./ticket-attachments.component.css'],
})
export class TicketAttachmentsComponent {
  @Input() headerText = 'Attachments';
  ticket: any = [];
  constructor(private agentService: AgentService) {}
  document: string = '';
  ngOnInit() {
    this.agentService.getData().subscribe((data) => {
      this.ticket = data[0];
      console.log(data);
      this.document = this.ticket.documentLink;
    });
  }
}
