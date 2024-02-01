import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApproveDenyService } from '@app/features/service/httpService/approve-deny.service';
import { DepartmentHeadService } from '@app/features/service/httpService/department-head.service';

export interface TicketDetails {
  id: number;
  ticketName: string;
  employeeName: string;
  assignedTo: string;
  submittedDate: string;
  priorityName: string;
  statusName: string;
  ticketDescription: string;
  documentLink: string;
}
@Component({
  selector: 'app-detailed-dh-ticket',
  templateUrl: './detailed-dh-ticket.component.html',
  styleUrls: ['./detailed-dh-ticket.component.css'],
})
export class DetailedDhTicketComponent implements OnInit {
  ticketDetails!: TicketDetails;
  customHeaderText: string = '';
  ticketId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private departmentHeadService: DepartmentHeadService,
    private approveDenyService: ApproveDenyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const ticketId = Number(params['Id']);
      console.log(ticketId);

      this.departmentHeadService
        .getdepartmentHeadTicketDetails(ticketId)
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
        },
        (error) => {
          console.error('Error updating ticket', error);
        }
      );
    }
  }
}
