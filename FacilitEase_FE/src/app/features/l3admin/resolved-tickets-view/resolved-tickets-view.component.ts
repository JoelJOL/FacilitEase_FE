import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-resolved-tickets-view',
  templateUrl: './resolved-tickets-view.component.html',
  styleUrls: ['./resolved-tickets-view.component.css']
})
export class ResolvedTicketsViewComponent {
  tickets:any=[];
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.agentService.getAllResolvedTickets().subscribe(data => {
      this.tickets=data;
       console.log(data);     
    });
  }
  viewTicket() {
    this.router.navigate(['/agentticket']);
  }
}
