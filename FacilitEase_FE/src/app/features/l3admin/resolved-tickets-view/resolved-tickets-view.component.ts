import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-resolved-tickets-view',
  templateUrl: './resolved-tickets-view.component.html',
  styleUrls: ['./resolved-tickets-view.component.css'],
})
export class ResolvedTicketsViewComponent {
  tickets: any = [];
  @Output() rowClicked = new EventEmitter<number>();
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Employee Name',
    'Submitted Date',
    'Resolved Date',
    'Priority',
  ];
  apiLink: string = '';
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.apiLink = this.agentService.getAllResolvedTickets();
    console.log(this.apiLink);
  }
  viewTicket() {
    this.router.navigate(['/agentticket']);
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l3admin/view-ticket-detail-noedit', Id]);
  }
}
