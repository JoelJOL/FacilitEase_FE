import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/ticket-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancel-request-view',
  templateUrl: './cancel-request-view.component.html',
  styleUrls: ['./cancel-request-view.component.css'],
})
export class CancelRequestViewComponent {
  customHeaderText = 'Supported Attachments'; // Custom header text for the component
  ticketDetails: any; // Details of the ticket
  ticketId: number = 0;  // ID of the ticket
  modalRef: BsModalRef | undefined;  // Reference to the modal
  titleSubAgent: any = []; // Details for the title subsection
  editMode: boolean = false; // Flag to indicate edit mode

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
     // Subscribe to route parameters to get the ticket ID
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
      console.log('This is the main thing i created!');
    });

    // Fetch ticket details based on the ticket ID
    this.agentService
      .getData(this.ticketId)
      .subscribe((ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log(this.ticketDetails);
        // Set title subsection details
        this.titleSubAgent = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
      });
  }

  // Method called when edit mode changes
  onEditModeChange(editMode: boolean) {
    // Update the editMode value
    this.editMode = editMode;
    console.log("Grand parent",this.editMode);
  }

   // Method to open a modal with ticket details
  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }

   // Method to accept a cancellation request
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
              this.toastr.success('Cancellation Request accepted successfully!', 'Success');
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

  // Method to deny a cancellation request
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
              this.toastr.success('Cancellation Request denied successfully!', 'Success');
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
