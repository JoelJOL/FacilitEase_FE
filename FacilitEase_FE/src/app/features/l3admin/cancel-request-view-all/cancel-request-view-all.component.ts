import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-cancel-request-view-all',
  templateUrl: './cancel-request-view-all.component.html',
  styleUrls: ['./cancel-request-view-all.component.css'],
})
export class CancelRequestViewAllComponent {
  tickets: any = [];
  @Output() rowClicked = new EventEmitter<number>();
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Raised Date',
    'Requested Date',
    'Priority',
    'Status',
    'Department',
    'Location'
  ];
  apiLink: string = '';
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    this.apiLink = this.agentService.getAllCancelRequestTickets();
    console.log(this.apiLink);
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l3admin/request-to-cancel-detail', Id]);
  }
}
