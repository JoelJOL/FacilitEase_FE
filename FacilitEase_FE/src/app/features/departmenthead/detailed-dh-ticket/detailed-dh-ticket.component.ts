import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApproveDenyService } from '@app/features/service/httpService/DH-aproveDeny/approve-deny.service';
import { DepartmentHeadService } from '@app/features/service/httpService/Department-head/department-head.service';
import { TicketDetails } from '@app/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '@app/components/layout/modal/modal.component';

@Component({
  selector: 'app-detailed-dh-ticket',
  templateUrl: './detailed-dh-ticket.component.html',
  styleUrls: ['./detailed-dh-ticket.component.css'],
})
export class DetailedDhTicketComponent implements OnInit {
  ticketDetails!: TicketDetails;
  customHeaderText: string = '';
  ticketId: number = 0;
  editMode: boolean = false;
  modalRef: BsModalRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private departmentHeadService: DepartmentHeadService,
    private approveDenyService: ApproveDenyService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const ticketId = Number(params['Id']);
      console.log(ticketId);

      this.departmentHeadService
        .getdepartmentHeadTicketDetails(ticketId)
        .subscribe((data) => {
          this.ticketDetails = data;

          console.log(this.ticketDetails);
          console.log(22);
        });
    });
  }

  updateTicket(isApproved: boolean): void {
    const ticketId = this.ticketDetails.id.toString();
    if (ticketId) {
      const confirmation = window.confirm(
        'Are you sure you want to update the ticket?'
      );

      if (confirmation) {
        this.approveDenyService.updateTicket(ticketId, isApproved).subscribe(
          () => {
            console.log('Ticket updated successfully');
            alert('Ticket updated successfully');
            this.redirectToPreviousPage();
          },
          (error) => {
            console.error('Error updating ticket', error);
          }
        );
      }
    }
  }

  redirectToPreviousPage(): void {
    window.history.back();
  }
  onEditModeChange(editMode: boolean) {
    // Update the editMode value
    this.editMode = editMode;
    console.log('Grand parent', this.editMode);
  }
  handleAction(ticketDetails: any): void {
    if (this.editMode) {
      console.log('Newww', this.editMode);
      alert('Your changes have not been saved!');
    } else {
      this.openModal(ticketDetails);
    }
  }
  // Open modal with ticket details
  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }
}
