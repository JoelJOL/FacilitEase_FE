import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkeletonService } from '@app/features/service/dataService/skeletonService/skeleton.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-view-l1',
  templateUrl: './ticket-view-l1.component.html',
  styleUrls: ['./ticket-view-l1.component.css'],
})
export class TicketViewL1Component {
  customHeaderText = 'Supported Attachments';
  ticketDetails: any = [];
  ticketId: any;
  titleSubHeading: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private skeletonService: SkeletonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    this.agentService.getTicketData(this.ticketId).subscribe((data) => {
      console.log('API Response:', data);
      this.ticketDetails = data;
      console.log('Ticket Details:', this.ticketDetails);
      this.titleSubHeading = [
        { heading: 'Raised By', text: this.ticketDetails.employeeName },
        { heading: 'Assigned To', text: this.ticketDetails.assignedTo },
        { heading: 'Department', text: this.ticketDetails.deptName },
        { heading: 'Manager', text: this.ticketDetails.managerName },
        { heading: 'Location', text: this.ticketDetails.locationName },
      ];
      this.skeletonService.showSkeletonDetailsassigned = false;
    });
  }
}
