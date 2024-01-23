import { Component } from '@angular/core';
import { AgentService } from 'src/app/features/service/httpService/agent.service';

@Component({
  selector: 'app-title-sub',
  templateUrl: './title-sub.component.html',
  styleUrls: ['./title-sub.component.css']
})
export class TitleSubComponent {
  ticket: any=[];
  items: any = [];
  constructor(private agentService: AgentService) {}
  ngOnInit() {
    this.agentService.getData().subscribe(data => {
      this.ticket = data[0];
      console.log(data);
     
      this.items = [
        { heading: 'Raised By', text: this.ticket.raisedEmployeeName },
        { heading: 'Department', text: this.ticket.deptName },
        { heading: 'Manager', text: this.ticket.managerName },
        { heading: 'Project Code', text: this.ticket.projectCode },
        { heading: 'Location', text: this.ticket.locationName }
      ];
    });
  }
}
