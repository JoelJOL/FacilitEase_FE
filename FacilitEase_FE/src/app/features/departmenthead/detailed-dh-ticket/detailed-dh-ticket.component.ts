import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApproveDenyService } from '@app/features/service/httpService/DH-aproveDeny/approve-deny.service';
import { DepartmentHeadService } from '@app/features/service/httpService/Department-head/department-head.service';
import { TicketDetails } from '@app/features/l3admin/l3Models/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    private modalService: BsModalService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);

      this.departmentHeadService
        .getdepartmentHeadTicketDetails(this.ticketId)
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
      this.approveDenyService.updateTicket(ticketId, isApproved).subscribe(
        () => {
          console.log('Ticket updated successfully');
          if (isApproved) {
            this.toastr.success('Ticket Approved!', 'Success');
          } else {
            this.toastr.success('Ticket Rejected!', 'Success');
          }
          this.redirectToPreviousPage();
        },
        (error) => {
          console.error('Error updating ticket', error);
        }
      );
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
  openConfirmationModal(action: string): void {
    let confirmationMessage = '';

    switch (action) {
      case 'accept':
        confirmationMessage = 'Are you sure you want to accept this ticket?';
        break;
      case 'reject':
        confirmationMessage = 'Are you sure you want to reject this ticket?';
        break;
      default:
        // Handle other actions if needed
        break;
    }
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'accept') {
          this.updateTicket(true);
        } else if (action === 'reject') {
          this.updateTicket(false);
        }
      }
    });
  }
}
