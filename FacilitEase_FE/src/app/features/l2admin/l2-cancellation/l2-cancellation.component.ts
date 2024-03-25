import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import {
  AssignedTickets,
  CancellationRequest,
  CancellationRequestTicketDetails,
  EscalatedTickets,
  TicketsToResolve,
  UnassignedTickets,
  l2Admin,
} from 'environments/environment';

@Component({
  selector: 'app-l2-cancellation',
  templateUrl: './l2-cancellation.component.html',
  styleUrls: ['./l2-cancellation.component.css'],
})
export class L2CancellationComponent {
  activeBox: number = 5;

  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Assigned To',
    'Submitted Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  apiLink: string = '';

  constructor(private masterService: MasterService, private router: Router) { }

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkCancellationRequests();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate([
      `${l2Admin}/${CancellationRequestTicketDetails}`,
      rowId,
    ]);
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
