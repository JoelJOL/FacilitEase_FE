import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { GetAPIService } from '@app/features/service/httpService/ticketRaise/get-api.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { MatDialog } from '@angular/material/dialog';
import { TicketResponse } from '@app/features/l3admin/l2Models/model';
import { TicketDetails } from '@app/features/l3admin/l2Models/ticket-details';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-to-cancel',
  templateUrl: './request-to-cancel.component.html',
  styleUrls: ['./request-to-cancel.component.css'],
})
export class RequestToCancelComponent {
  customHeaderText = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails!: TicketDetails;
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
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['id']);
      console.log('This is the id', this.ticketId);
    });
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

  onCancelRequest(): void {
    const ticketId = this.ticketDetails.id;
    this.ticketCancelService.cancelRequest(ticketId).subscribe(
      (response) => {
        console.log('Cancellation successful:', response);
        this.toastr.success('Cancellation Request Successful!', 'Success');
        this.isCancelRequested = true;
        this.router.navigate(['employee/my-tickets']);
      },
      (error) => {
        console.error('Cancellation error:', error);
      }
    );
  }

  openConfirmationModal() {
    let confirmationMessage =
      'Are you sure you want to sent a cancellation request?';
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.onCancelRequest();
      this.isCancelRequested = true;
      this.router.navigate(['employee/my-tickets']);
    });
  }
}
