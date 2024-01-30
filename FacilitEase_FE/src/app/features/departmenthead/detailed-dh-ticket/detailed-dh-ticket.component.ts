import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentHeadService } from '@app/features/service/httpService/department-head.service';

@Component({
  selector: 'app-detailed-dh-ticket',
  templateUrl: './detailed-dh-ticket.component.html',
  styleUrls: ['./detailed-dh-ticket.component.css'],
})
export class DetailedDhTicketComponent implements OnInit {
  ticketDetails1: any;
  customHeaderText: string = '';
  ticketId: number | undefined;

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
          this.ticketDetails1 = data[0];
          return this.ticketDetails1 !== undefined;
          console.log(data);
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
