import { Component, Input, OnInit } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-tracking',
  templateUrl: './ticket-tracking.component.html',
  styleUrls: ['./ticket-tracking.component.css'],
})
export class TicketTrackingComponent implements OnInit {
  events: any[] = []; // Array to store tracking events
  @Input() ticketId: number=0;  // Unique identifier of the ticket, provided as input

  constructor(private agentService: AgentService) {}

  ngOnInit() {
     // Fetch tracking details for the ticketId from the agent service
    this.agentService.getTrackingDetails(this.ticketId).subscribe(
      data => {
        console.log('Data received:', data);
         // Transform data into events array
        this.events = data.map(tracking => ({
          content: tracking.statusName, 
          priority: tracking.priorityName,
          submitted: tracking.submittedByEmployeeName,
          assigned: tracking.assignedToEmployeeName,
          controller: tracking.approverEmployeeName,
          date: tracking.trackingCreatedDate, 
        }));
        // Log transformed events
        console.log('Transformed events:', this.events);
      },
      // Error callback function
      error => {
        console.error('Error fetching tracking details', error);
      }
    );
  }
}
