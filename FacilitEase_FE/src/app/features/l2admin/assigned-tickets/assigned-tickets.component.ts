import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../service/dataService/master.service';

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
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Assigned To',
    'Submitted Date',
    'Priority',
    'Status',
  ];
  apiLink: string = '';

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkAssigned();
  }

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['l2/details-assigned', Id]);
  }
}
