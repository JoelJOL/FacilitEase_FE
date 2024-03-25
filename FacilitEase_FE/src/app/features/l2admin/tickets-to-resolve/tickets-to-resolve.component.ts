import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import {
  AssignedTickets,
  CancellationRequest,
  EscalatedTickets,
  TicketsToResolve,
  TicketsToResolveTicketDetails,
  UnassignedTickets,
  l2Admin,
} from 'environments/environment';

@Component({
  selector: 'app-tickets-to-resolve',
  templateUrl: './tickets-to-resolve.component.html',
  styleUrls: ['./tickets-to-resolve.component.css'],
})
export class TicketsToResolveComponent {
  activeBox: number = 4;

  headers: string[] = [
    'Id',
    'Ticket Name',
    'Raised By',
    'Submitted Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = '';

  constructor(
    private masterService: MasterService,
    private router: Router,
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkTicketsToResolve();
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l2Admin}/${TicketsToResolveTicketDetails}`, Id]);
  }
  activateBox(boxNumber: number) {
    this.activeBox = boxNumber;
    if (this.activeBox === 1) {
      this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
    } else if (this.activeBox === 2) {
      this.router.navigate([`${l2Admin}/${AssignedTickets}`]);
    } else if (this.activeBox === 3) {
      this.router.navigate([`${l2Admin}/${EscalatedTickets}`]);
    } else if (this.activeBox === 4) {
      this.router.navigate([`${l2Admin}/${TicketsToResolve}`]);
    } else if (this.activeBox === 5) {
      this.router.navigate([`${l2Admin}/${CancellationRequest}`]);
    }
  }
}
