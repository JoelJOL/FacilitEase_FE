import { Component } from '@angular/core';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDetails } from '@app/features/l3admin/l3Models/ticket-details';
import { ApprovalPendingTickets } from 'environments/environment';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Component({
  selector: 'app-manager-view-ticket-simple',
  templateUrl: './manager-view-ticket-simple.component.html',
  styleUrls: ['./manager-view-ticket-simple.component.css'],
})
export class ManagerViewTicketSimpleComponent {
  customHeaderText: string = 'Support Attachments';
  ticketId: number = 0;
  ticketDetails!: TicketDetails;
  editMode: boolean = false;
  currentUserId: number = this.azureService.userId;

  constructor(
    private masterService: MasterService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private azureService: AzureService
  ) { }

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
          this.router.navigate([`${ApprovalPendingTickets}`]);
        } else if (action === 'reject') {
          this.rejectTicket();
          this.router.navigate([`${ApprovalPendingTickets}`]);
        } else if (action === 'forward') {
          this.forwardTicket();
        }
      }
    });
  }
  forwardTicket() {
    this.masterService.sendForApproval(this.ticketDetails.id, 2).subscribe(
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
}
