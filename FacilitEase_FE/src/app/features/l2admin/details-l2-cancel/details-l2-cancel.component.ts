import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/features/l3admin/l3Models/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CancellationRequest, l2Admin } from 'environments/environment';

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
    private modalService: BsModalService,
    private toastr: ToastrService
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
          this.toastr.success('Ticket Cancelled Successfully!', 'Success');
          this.router.navigate([`${l2Admin}/${CancellationRequest}`]);
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
          this.toastr.success('Ticket Cancellation Denied!', 'Success');
          this.router.navigate([`${l2Admin}/${CancellationRequest}`]);
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
