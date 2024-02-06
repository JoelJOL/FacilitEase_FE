import { Component, OnInit } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-tracking',
  templateUrl: './ticket-tracking.component.html',
  styleUrls: ['./ticket-tracking.component.css'],
})
export class TicketTrackingComponent implements OnInit {
  events: any[] = [];

  constructor(private agentService: AgentService) {}

  ngOnInit() {
    this.agentService.getTrackingDetails().subscribe(
      data => {
        console.log('Data received:', data);
        this.events = data.map(tracking => ({
          content: tracking.statusName, 
          submitted: tracking.submittedByEmployeeName,
          assigned: tracking.assignedToEmployeeName,
          controller: tracking.approverEmployeeName,
          date: tracking.trackingCreatedDate, 
          status: 'R'
        }));
        console.log('Transformed events:', this.events);
      },
      error => {
        console.error('Error fetching tracking details', error);
      }
    );
  }
}
