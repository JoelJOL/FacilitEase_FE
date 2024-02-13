import { Component, Input, OnInit } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-tracking',
  templateUrl: './ticket-tracking.component.html',
  styleUrls: ['./ticket-tracking.component.css'],
})
export class TicketTrackingComponent implements OnInit {
  events: any[] = [];
  @Input() ticketId: number=0;

  constructor(private agentService: AgentService) {}

  ngOnInit() {
    console.log("Tracking component");
    console.log(this.ticketId)
    this.agentService.getTrackingDetails(this.ticketId).subscribe(
      data => {
        console.log('Data received:', data);
        this.events = data.map(tracking => ({
          content: tracking.statusName, 
          priority: tracking.priorityName,
          submitted: tracking.submittedByEmployeeName,
          assigned: tracking.assignedToEmployeeName,
          controller: tracking.approverEmployeeName,
          date: tracking.trackingCreatedDate, 
        }));
        console.log('Transformed events:', this.events);
      },
      error => {
        console.error('Error fetching tracking details', error);
      }
    );
  }
}
