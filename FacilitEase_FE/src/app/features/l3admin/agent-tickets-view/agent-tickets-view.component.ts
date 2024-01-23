import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-tickets-view',
  templateUrl: './agent-tickets-view.component.html',
  styleUrls: ['./agent-tickets-view.component.css']
})
export class AgentTicketsViewComponent {
  tickets:any=[];
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.agentService.getAllTickets().subscribe(data => {
      this.tickets =data;
       console.log(data);     
    });
  }
  viewTicket() {
    this.router.navigate(['/agentticket']);
  }
}
