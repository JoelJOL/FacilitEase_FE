import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-on-hold-tickets-view',
  templateUrl: './on-hold-tickets-view.component.html',
  styleUrls: ['./on-hold-tickets-view.component.css'],
})
export class OnHoldTicketsViewComponent {
  tickets: any = [];
  @Output() rowClicked = new EventEmitter<number>();
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Employee Name',
    'Submitted Date',
    'Updated Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = '';
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.apiLink = this.agentService.getAllOnHoldTickets();
    console.log(this.apiLink);
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l3admin/view-ticket-detail-noedit', Id]);
  }
}
