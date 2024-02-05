import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agent.service';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';

@Component({
  selector: 'app-details-assigned',
  templateUrl: './details-assigned.component.html',
  styleUrls: ['./details-assigned.component.css'],
})
export class DetailsAssignedComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails: any = [];
  ticketId: any;
  titleSubHeading: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient
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
        { heading: 'Raised By', text: this.ticketDetails.raisedEmployeeName },
        { heading: 'Department', text: this.ticketDetails.deptName },
        { heading: 'Manager', text: this.ticketDetails.managerName },
        { heading: 'Project Code', text: this.ticketDetails.projectCode },
        { heading: 'Location', text: this.ticketDetails.locationName },
      ];
    });
  }
}
