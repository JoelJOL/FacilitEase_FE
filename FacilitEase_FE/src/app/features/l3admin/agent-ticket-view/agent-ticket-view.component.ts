import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agentSerivce/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { TicketDetails } from '@app/ticket-details';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css'],
})
export class AgentTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails!: TicketDetails; // Hold ticket details
  ticketId: number = 0; // Initialize ticket ID
  modalRef: BsModalRef | undefined; // Modal reference
  titleSubAgent: any = [];
  editMode: boolean = false;
  timelineData: any[] = []; // Placeholder for timeline data

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  // Method to handle edit mode change
  onEditModeChange(editMode: boolean) {
    // Update the editMode value
    this.editMode = editMode;
    console.log('Grand parent', this.editMode);
  }

   // Lifecycle hook - called after the component's view has been initialized
  ngOnInit(): void {
    // Extract ticket ID from route parameters
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    // Fetch ticket details from service
    this.agentService.getData(this.ticketId).subscribe(
      (ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log('Ticket Details:', this.ticketDetails);

        // Assign sub-agent title and text
        this.titleSubAgent = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
      },
      (error) => {
        console.error('API call error:', error);
      }
    );
  }

  // Method to handle action based on edit mode
  handleAction(ticketDetails: any): void {
    if (this.editMode) {
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

  resolveTicket(): void {
    let confirmationMessage = 'Are you sure you want to close this ticket?';
    if (this.editMode) {
      alert('Your changes have not been saved!');
    } else {
      console.log(this.editMode);
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '400px',
        data: confirmationMessage,
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.agentService.resolveTicket(this.ticketId).subscribe(
            (response) => {
              console.log('API call success:', response);
              this.toastr.success('Ticket closed Successfully!', 'Success');
              this.router.navigate(['l3admin/view-ticket']); // Navigate to view-ticket page
            },
            (error) => {
              console.error('API call error:', error);
            }
          );
        } else {
          this.toastr.error('Failed to close the ticket!', 'Error');
        }
        });
    }
  }

    
}
