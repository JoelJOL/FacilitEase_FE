import { Component, Input } from '@angular/core';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TrackingModalComponent } from '../tracking-modal/tracking-modal.component';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css'],
})
export class TicketInfoComponent {
  ticketId: string = ''; // Replace with actual data
  ticketPriority: string = '';
  status: string = '';
  modalRef: BsModalRef | undefined;
  @Input() ticketDetails: any;
  constructor( private modalService: BsModalService) {}

  getPriorityColor(): string {
    if (this.ticketDetails && this.ticketDetails.priorityName) {
      switch (this.ticketDetails.priorityName.toLowerCase()) {
        case 'high':
          return 'red';
        case 'medium':
          return 'orange';
        case 'low':
          return 'green';
        default:
          return 'black';
      }
    } else {
      return 'black';
    }
  }

  openTrackingModal() {
    this.modalRef = this.modalService.show(TrackingModalComponent,{
      initialState: {
        ticketDetails: this.ticketDetails,
      },
    });
    console.log("This is modal")
  }

}
