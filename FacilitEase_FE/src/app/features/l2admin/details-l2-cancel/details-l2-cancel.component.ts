import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-details-l2-cancel',
  templateUrl: './details-l2-cancel.component.html',
  styleUrls: ['./details-l2-cancel.component.css'],
})
export class DetailsL2CancelComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails: any;
  ticketId: number = 0;
  modalRef: BsModalRef | undefined;
  titleSubAgent: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
      console.log('This is the main thing i created!');
    });

    this.agentService
      .getTicketData(this.ticketId)
      .subscribe((ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log(this.ticketDetails);
        this.titleSubAgent = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Assigned To', text: this.ticketDetails.assignedTo },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
      });
  }

  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }

  acceptCancelRequest(): void {
    const isConfirmed = window.confirm(
      'Are you sure you want to accept the cancellation request?'
    );

    if (isConfirmed) {
      this.agentService.AcceptCancelTicket(this.ticketId).subscribe(
        (response) => {
          console.log('API call success:', response);
          alert('Ticket cancelled successfully!');
          this.router.navigate(['l2admin/l2-cancellation']);
        },
        (error) => {
          console.error('API call error:', error);
        }
      );
    } else {
      console.log('Cancellation acceptation success.');
    }
  }

  denyCancelRequest(): void {
    const isConfirmed = window.confirm(
      'Are you sure you want to accept the cancellation request?'
    );

    if (isConfirmed) {
      this.agentService.DenyCancelTicket(this.ticketId).subscribe(
        (response) => {
          console.log('API call success:', response);
          alert('Cancellation denied successfully!');
          this.router.navigate(['l2admin/l2-cancellation']);
        },
        (error) => {
          console.error('API call error:', error);
        }
      );
    } else {
      console.log('Ticket resolution canceled.');
    }
  }
}
