import { Component, EventEmitter, Output } from '@angular/core';
import { AgentService } from '../../service/httpService/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-tickets-view',
  templateUrl: './agent-tickets-view.component.html',
  styleUrls: ['./agent-tickets-view.component.css']
})
export class AgentTicketsViewComponent {

  headers: string[] = ['ID', 'Ticket Name', 'Employee Name', 'Submitted Date', 'Priority', 'Status'];
  apiLink: string='';
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.apiLink = this.agentService.getAllTickets();
    console.log(this.apiLink);
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l3/view-ticket-in-detail', Id]);
  }

}
