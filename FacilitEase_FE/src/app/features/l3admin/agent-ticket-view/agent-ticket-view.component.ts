import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agent.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modal.service';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css']
})
export class AgentTicketViewComponent { 

  customHeaderText = 'Supported Attachments';  
  ticketId: number = 0; 
  ticketDetails: any=[]; 
  constructor(private route: ActivatedRoute,private agentService: AgentService, private myModalService: ModalService) {} 
  ngOnInit(): void { 
    this.route.params.subscribe((params) => { 
      this.ticketId = Number(params['id']); 
      console.log(this.ticketId); 

    }); 
    this.agentService.getData(this.ticketId).subscribe(data => { 
      this.ticketDetails =data[0]; 
       console.log(data); 
  }); 
  }
  openModal(): void {
    this.myModalService.openModal();
  }

  } 
