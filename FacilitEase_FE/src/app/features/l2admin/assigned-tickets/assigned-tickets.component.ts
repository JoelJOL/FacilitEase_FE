import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../service/dataService/masterService/master.service';
import { AssignedTicketDetails, AssignedTickets, CancellationRequest, EscalatedTickets, TicketsToResolve, UnassignedTickets, l2Admin } from 'environments/environment';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css'],
})
export class AssignedTicketsComponent {
  // assignedTickets: any[] = [];

  // constructor(private http: HttpClient, private router: Router) {}

  // ngOnInit() {
  //   this.loadAssignedTickets();
  // }

  // private loadAssignedTickets() {
  //   this.http
  //     .get<any[]>('https://localhost:7049/api/l2/assigned-tickets')
  //     .subscribe(
  //       (tickets) => {
  //         this.assignedTickets = tickets;
  //       },
  //       (error) => {
  //         console.error('Error loading unassigned tickets', error);
  //       }
  //     );
  // }
  activeBox: number = 2;

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
    this.apiLink = this.masterService.getApiLinkAssigned();
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l2Admin}/${AssignedTicketDetails}`, Id]);
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
