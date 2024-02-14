import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-on-hold-tickets-view',
  templateUrl: './on-hold-tickets-view.component.html',
  styleUrls: ['./on-hold-tickets-view.component.css'],
})
export class OnHoldTicketsViewComponent {
  tickets: any = []; // Array to store on-hold tickets
  @Output() rowClicked = new EventEmitter<number>();   // Event emitter for emitting row clicks
  headers: string[] = [ // Headers for the table displaying on-hold tickets
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
  apiLink: string = ''; // API link for fetching all on-hold tickets
  constructor(private agentService: AgentService, private router: Router) {}
  ngOnInit() {
    // Get the API link for fetching all on-hold tickets
    this.apiLink = this.agentService.getAllOnHoldTickets();
    console.log(this.apiLink);
  }

  // Method called when a row is clicked
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l3admin/view-ticket-detail-noedit', Id]);
  }
}
