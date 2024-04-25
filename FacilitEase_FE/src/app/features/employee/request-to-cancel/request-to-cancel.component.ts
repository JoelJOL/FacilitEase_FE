import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { GetAPIService } from '@app/features/service/httpService/ticketRaise/get-api.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { MatDialog } from '@angular/material/dialog';
import { TicketResponse } from '@app/features/l3admin/l3Models/model';
import { TicketDetails } from '@app/features/l3admin/l3Models/ticket-details';
import { ToastrService } from 'ngx-toastr';
import { Employee, Tickets } from 'environments/environment';

@Component({
  selector: 'app-request-to-cancel',
  templateUrl: './request-to-cancel.component.html',
  styleUrls: ['./request-to-cancel.component.css'],
})
export class RequestToCancelComponent {
  //customHeaderText = 'Supported Attachments';

  // Ticket ID and details initialization
  ticketId: number = 0;
  ticketDetails!: TicketDetails;

  // Constructor with injected services
  isCancelRequested: boolean = false;
  titleSubHeading: any = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient,
    private ticketCancelService: GetAPIService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    // Extract ticket ID from route parameters
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['id']);
      console.log('This is the id', this.ticketId);
    });

    // Fetch ticket details using agentService

    this.agentService
      .getData(this.ticketId)
      .subscribe((ticketDetails: TicketDetails) => {
        console.log('API Response:', ticketDetails);
        this.ticketDetails = ticketDetails;
        this.titleSubHeading = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Assigned To', text: this.ticketDetails.assignedTo },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
        console.log('Ticket Details:', this.ticketDetails);
      });
  }

  // Function to handle cancellation request
  onCancelRequest(): void {
    // Extract ticket ID from ticketDetails
    const ticketId = this.ticketDetails.id;

    // Send cancellation request using ticketCancelService
    this.ticketCancelService.cancelRequest(ticketId).subscribe(
      (response) => {
        console.log('Cancellation successful:', response);

        this.toastr.success('Cancellation Request Successful!', 'Success');
        this.isCancelRequested = true;

        this.router.navigate([`${Employee}/${Tickets}`]);
      },
      (error) => {
        console.error('Cancellation error:', error);
      }
    );
  }

  // Function to open confirmation modal for cancellation
  openConfirmationModal() {
    let confirmationMessage =
      'Are you sure you want to send a cancellation request?';

    // Open MatDialog with confirmation message
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });

    // Subscribe to the result after the modal is closed
    dialogRef.afterClosed().subscribe((result) => {
      // If confirmed, proceed with cancellation
      if (result) {
        this.onCancelRequest();
        this.router.navigate([`${Employee}/${Tickets}`]);
      }
    });
  }
}
