import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { GetAPIService } from '@app/features/service/httpService/GetAPI/get-api.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';
import { MatDialog } from '@angular/material/dialog';
import { TicketResponse } from '@app/features/Interface/interface';
import { TicketDetails } from '@app/ticket-details';

@Component({
  selector: 'app-request-to-cancel',
  templateUrl: './request-to-cancel.component.html',
  styleUrls: ['./request-to-cancel.component.css'],
})
export class RequestToCancelComponent {
  customHeaderText = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails!: TicketDetails;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient,
    private ticketCancelService: GetAPIService
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
        console.log('Ticket Details:', this.ticketDetails);
      });
  }

  onCancelRequest(): void {
    const ticketId = this.ticketDetails.id;
    this.ticketCancelService.cancelRequest(ticketId).subscribe(
      (response) => {
        console.log('Cancellation successful:', response);
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
    });
  }
}
