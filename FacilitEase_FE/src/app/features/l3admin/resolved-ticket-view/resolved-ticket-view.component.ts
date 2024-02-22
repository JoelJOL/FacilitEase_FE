import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/features/l3admin/l3Models/ticket-details';

@Component({
  selector: 'app-resolved-ticket-view',
  templateUrl: './resolved-ticket-view.component.html',
  styleUrls: ['./resolved-ticket-view.component.css'],
})
export class ResolvedTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails!: TicketDetails; // Single object, not an array
  ticketId: number = 0;
  titleSubAgent: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
      console.log('This is the main thing I created!');
    });

    this.agentService.getData(this.ticketId).subscribe(
      (ticketDetails: TicketDetails) => {
        if (ticketDetails) {
          this.ticketDetails = ticketDetails;
          console.log(ticketDetails);
          this.titleSubAgent = [
            { heading: 'Raised By', text: this.ticketDetails.employeeName },
            { heading: 'Department', text: this.ticketDetails.deptName },
            { heading: 'Manager', text: this.ticketDetails.managerName },
            { heading: 'Location', text: this.ticketDetails.locationName },
          ];
        } else {
          console.error(
            'API response is empty or does not contain TicketDetails.'
          );
        }
      },
      (error) => {
        console.error('Error retrieving ticket details', error);
        // Handle error (if needed)
      }
    );
  }
}
