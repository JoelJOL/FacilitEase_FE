import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ticketId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private departmentHeadService: DepartmentHeadService
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

  // destructureProperties(data: any): any {
  //   return {
  //     ticketName: data?.ticketName,
  //     employeeName: data?.employeeName,
  //     assignedTo: data?.assignedTo,
  //     submittedDate: data?.submittedDate,
  //     priorityName: data?.priorityName,
  //     statusName: data?.statusName,
  //     ticketDescription: data?.ticketDescription,
  //     documentLink: data?.documentLink,
  //   };
  // }
}
