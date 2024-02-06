import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { AgentService } from '@app/features/service/httpService/agent.service';
import { TicketDetails } from '@app/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cancel-request-view',
  templateUrl: './cancel-request-view.component.html',
  styleUrls: ['./cancel-request-view.component.css'],
})
export class CancelRequestViewComponent {
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
      .getData(this.ticketId)
      .subscribe((ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log(this.ticketDetails);
        this.titleSubAgent = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          { heading: 'Project Code', text: this.ticketDetails.projectCode },
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
      this.agentService.resolveTicket(this.ticketId).subscribe(
        (response) => {
          console.log('API call success:', response);
          alert('Ticket resolved successfully!');
          this.router.navigate(['/view-ticket']);
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
