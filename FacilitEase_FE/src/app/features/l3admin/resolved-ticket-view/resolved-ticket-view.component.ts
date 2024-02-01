import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-resolved-ticket-view',
  templateUrl: './resolved-ticket-view.component.html',
  styleUrls: ['./resolved-ticket-view.component.css']
})
export class ResolvedTicketViewComponent {
  customHeaderText = 'Supported Attachments';  
  ticketDetails: any;
  ticketId: number=0; 
  titleSubAgent: any=[];

  constructor(private route: ActivatedRoute, private agentService: AgentService) {} 

  ngOnInit(): void { 
    this.route.params.subscribe((params) => { 
      this.ticketId = Number(params['Id']); 
      console.log(this.ticketId); 
      console.log("This is the main thing i created!")
    }); 

    this.agentService.getData(this.ticketId).subscribe(data => { 
      this.ticketDetails = data[0]; 
      console.log(data); 
      this.titleSubAgent = [
        { heading: 'Raised By', text: this.ticketDetails.raisedEmployeeName },
        { heading: 'Department', text: this.ticketDetails.deptName },
        { heading: 'Manager', text: this.ticketDetails.managerName },
        { heading: 'Project Code', text: this.ticketDetails.projectCode },
        { heading: 'Location', text: this.ticketDetails.locationName }
      ];
    }); 

  }
}
