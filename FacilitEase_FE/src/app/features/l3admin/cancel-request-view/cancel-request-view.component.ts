import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';

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
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog
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
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
      });
  }

  onEditModeChange(editMode: boolean) {
    // Update the editMode value
    this.editMode = editMode;
    console.log("Grand parent",this.editMode);
  }

  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }

  acceptCancelRequest(): void {
    let confirmationMessage = 'Are you sure you want to accept the cancellation request?';
    if (this.editMode) {
      alert(
        'Your changes have not been saved!'
      );
    }else{
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '400px',
        data: confirmationMessage,
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.agentService.AcceptCancelTicket(this.ticketId).subscribe(
            (response) => {
              console.log('API call success:', response);
              alert('Ticket cancelled successfully!');
              this.router.navigate(['l3admin/cancel-requests']);
            },
            (error) => {
              console.error('API call error:', error);
            }
          );
        } else {
          console.log('Ticket cancellation accepted.');
        }
        });
    }
    
  }

  denyCancelRequest(): void {
    let confirmationMessage = 'Are you sure you want to deny the cancellation request?';
    if (this.editMode) {
      alert(
        'Your changes have not been saved!'
      );
    }else{
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '400px',
        data: confirmationMessage,
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.agentService.DenyCancelTicket(this.ticketId).subscribe(
            (response) => {
              console.log('API call success:', response);
              alert('Cancellation denied successfully!');
              this.router.navigate(['l3admin/cancel-requests']);
            },
            (error) => {
              console.error('API call error:', error);
            }
          );
        } else {
          console.log('Ticket cancellation denied.');
        }
        });
  
     
    }
    }
    
}
