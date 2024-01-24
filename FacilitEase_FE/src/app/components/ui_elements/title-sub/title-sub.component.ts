import { Component, Input } from '@angular/core'; 
import { AgentService } from '@app/features/service/httpService/agent.service';

 

 

@Component({ 
  selector: 'app-title-sub', 
  templateUrl: './title-sub.component.html', 
  styleUrls: ['./title-sub.component.css'] 

}) 

export class TitleSubComponent { 

  ticket: any=[]; 
  items: any = []; 
  constructor(private agentService: AgentService) {} 
  @Input() set ticketDetails(details: any) { 
    if (details) { 
      this.items = [ 
        { heading: 'Raised By', text: details.raisedEmployeeName }, 
        { heading: 'Department', text: details.deptName }, 
        { heading: 'Manager', text: details.managerName }, 
        { heading: 'Project Code', text: details.projectCode }, 
        { heading: 'Location', text: details.locationName } 
      ]; 
    } 
  } 
} 