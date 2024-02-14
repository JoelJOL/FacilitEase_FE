import { Component, OnInit } from '@angular/core';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDetails } from '@app/features/l3admin/l2Models/ticket-details';

@Component({
  selector: 'app-manager-view-ticket-detail',
  templateUrl: './manager-view-ticket-detail.component.html',
  styleUrls: ['./manager-view-ticket-detail.component.css'],
})
export class ManagerViewTicketDetailComponent implements OnInit {
  customHeaderText: string = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails!: TicketDetails;
  editMode: boolean = false;
  modalRef: BsModalRef | undefined;

  constructor(
    private masterService: MasterService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idFromRoute = params.get('Id');
      if (idFromRoute) {
        this.ticketId = +idFromRoute;
        this.fetchTicketDetails();
      }
    });
  }

  private fetchTicketDetails(): void {
    this.masterService.getManagerTicketDetails(this.ticketId).subscribe(
      (response: TicketDetails) => {
        this.ticketDetails = response;
        console.log('Ticket Details:', this.ticketDetails);
      },
      (error: any) => {
        console.error('Error fetching ticket details:', error);
      }
    );
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
      case 'forward':
        confirmationMessage =
          'Are you sure you want to forward this ticket for approval?';
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
          this.acceptTicket();
          this.router.navigate(['manager/manager-view-waiting-tickets']);
        } else if (action === 'reject') {
          this.rejectTicket();
          this.router.navigate(['manager/manager-view-waiting-tickets']);
        } else if (action === 'forward') {
          this.forwardTicket();
          this.router.navigate(['manager/manager-view-waiting-tickets']);
        }
      }
    });
  }
  forwardTicket() {
    this.masterService.sendForApproval(this.ticketDetails.id, 17).subscribe(
      () => {
        console.log('Forwarded for approval successfully');
      },
      (error: any) => {
        console.error('Error forwarding for approval:', error);
      }
    );
  }

  acceptTicket(): void {
    this.masterService.ticketDecision(this.ticketDetails.id, 2).subscribe(
      () => {
        console.log('Forwarded for approval successfully');
      },
      (error: any) => {
        console.error('Error forwarding for approval:', error);
      }
    );
  }

  rejectTicket(): void {
    this.masterService.ticketDecision(this.ticketDetails.id, 5).subscribe(
      () => {
        console.log('Forwarded for approval successfully');
      },
      (error: any) => {
        console.error('Error forwarding for approval:', error);
      }
    );
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
