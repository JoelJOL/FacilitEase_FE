import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modal.service';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css']
})
export class AgentTicketViewComponent { 
  customHeaderText = 'Supported Attachments';  
  ticketId: number = 0; 
  ticketDetails: any = []; 
  modalRef: BsModalRef | undefined;

  constructor(private route: ActivatedRoute, private agentService: AgentService, private modalService: BsModalService, private router: Router) {} 

  ngOnInit(): void { 
    this.route.params.subscribe((params) => { 
      this.ticketId = Number(params['Id']); 
      console.log(this.ticketId); 
    }); 

    this.agentService.getData(this.ticketId).subscribe(data => { 
      this.ticketDetails = data[0]; 
      console.log(data); 
    }); 
  }

  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails
      }
    });
  }

  resolveTicket(): void {
    this.agentService.resolveTicket(this.ticketId).subscribe(
      (response) => {
        console.log('API call success:', response);
        alert("Ticket resolved successfully!");
        this.router.navigate(['/view-ticket']); 
      },
      (error) => {
        console.error('API call error:', error);

      }
    );
  }
}
