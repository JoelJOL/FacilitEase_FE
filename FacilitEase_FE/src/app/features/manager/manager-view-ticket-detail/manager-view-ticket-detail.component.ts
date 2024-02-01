import { Component, OnInit } from '@angular/core';
import { MasterService } from '@app/features/service/dataService/master.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface TicketDetails {
  id: number;
  ticketName: string;
  employeeName: string;
  assignedTo: string;
  submittedDate: string;
  priorityName: string;
  statusName: string;
  notes: string;
  lastUpdate:string;
  ticketDescription: string;
  documentLink: string;
}

@Component({
  selector: 'app-manager-view-ticket-detail',
  templateUrl: './manager-view-ticket-detail.component.html',
  styleUrls: ['./manager-view-ticket-detail.component.css']
})
export class ManagerViewTicketDetailComponent implements OnInit {
  customHeaderText:string = "Support Attachments"
  ticketId: number = 0;
  ticketDetails!: TicketDetails;

  constructor(
    private masterService: MasterService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
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
        confirmationMessage = 'Are you sure you want to forward this ticket for approval?';
        break;
      default:
        // Handle other actions if needed
        break;
    }
  
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'accept') {
          this.acceptTicket();
          this.router.navigate(['manager-view-waiting-tickets']);
        } else if (action === 'reject') {
          this.rejectTicket();
          this.router.navigate(['manager-view-waiting-tickets']);
        } else if (action === 'forward') {
          this.forwardTicket();
        }
      }
    });
  }
  forwardTicket() {
        this.masterService.sendForApproval(this.ticketDetails.id, 2)
          .subscribe(
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
}
