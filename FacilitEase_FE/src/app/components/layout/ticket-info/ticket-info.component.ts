import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TrackingModalComponent } from '../tracking-modal/tracking-modal.component';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css'],
})
export class TicketInfoComponent {
  ticketId: string = ''; // Placeholder for ticket ID 
  ticketPriority: string = ''; // Placeholder for ticket priority
  status: string = ''; // Placeholder for ticket status
  modalRef: BsModalRef | undefined; // Reference to the modal, initialized as undefined
  @Input() ticketDetails: any; // Input property to receive ticket details from parent component

  constructor( private modalService: BsModalService) {}

  // Method to determine the color based on ticket priority
  getPriorityColor(): string {
    if (this.ticketDetails && this.ticketDetails.priorityName) {
      switch (this.ticketDetails.priorityName.toLowerCase()) {
        case 'critical':
          return 'darkred'; 
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

  // Method to open tracking modal
  openTrackingModal() {
    this.modalRef = this.modalService.show(TrackingModalComponent, {
      initialState: {
        ticketDetails: this.ticketDetails,
      },
    });
    console.log('This is modal');
  }
}
