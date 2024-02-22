import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketsToResolve, l2Admin } from 'environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-ticket-to-resolve',
  templateUrl: './details-ticket-to-resolve.component.html',
  styleUrls: ['./details-ticket-to-resolve.component.css'],
})
export class DetailsTicketToResolveComponent {
  customHeaderText = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails: any = [];
  modalRef: BsModalRef | undefined;
  titleSubHeading: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private modalService: BsModalService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    this.agentService.getTicketData(this.ticketId).subscribe((data) => {
      this.ticketDetails = data;
      console.log(data);
      console.log(this.ticketDetails);
      this.titleSubHeading = [
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

  resolveTicket(): void {
    this.agentService.resolveTicket(this.ticketId).subscribe(
      (response) => {
        console.log('API call success:', response);
        this.toastr.success('Ticket Resolved Successfully!', 'Success');
        this.router.navigate([`${l2Admin}/${TicketsToResolve}`]);
      },
      (error) => {
        console.error('API call error:', error);
      }
    );
  }
}
