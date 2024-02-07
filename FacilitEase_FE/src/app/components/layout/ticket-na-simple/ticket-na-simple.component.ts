import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { MasterService } from '@app/features/service/dataService/master.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
=======
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { AgentService } from '@app/features/service/httpService/agent.service';
>>>>>>> bd1a71d (new changes)

@Component({
  selector: 'app-ticket-na-simple',
  templateUrl: './ticket-na-simple.component.html',
  styleUrls: ['./ticket-na-simple.component.css']
})
export class TicketNaSimpleComponent {
  @Input() notes:string = 'Default Notes';
  @Input() lastupdate:string = 'Default time';
  @Input() ticketId: number=0; 
constructor(private agentService:AgentService){}
commentText: string='';

  ngOnInit() {
    this.agentService.getCommentText(this.ticketId).subscribe(
      (commentText: string) => {
        console.log('Comment Text:', commentText);
        this.commentText = commentText;
      });
  }

}
