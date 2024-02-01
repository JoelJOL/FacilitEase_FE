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
  @Input() headings: any[] = [];
  constructor(private agentService: AgentService) {} 
  @Input()ticketDetails:any;
  
     
} 