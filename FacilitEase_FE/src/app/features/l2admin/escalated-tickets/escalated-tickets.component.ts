import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/master.service';

@Component({
  selector: 'app-escalated-tickets',
  templateUrl: './escalated-tickets.component.html',
  styleUrls: ['./escalated-tickets.component.css'],
})
export class EscalatedticketsComponent {
  // escalatedTickets: any[] = [];

  // constructor(private http: HttpClient, private router: Router) {}

  // ngOnInit() {
  //   this.loadEscalatedTickets();
  // }

  // private loadEscalatedTickets() {
  //   this.http
  //     .get<any[]>('https://localhost:7049/api/l2/escalated-tickets')
  //     .subscribe(
  //       (escalatedTickets) => {
  //         this.escalatedTickets = escalatedTickets;
  //       },
  //       (error) => {
  //         console.error('Error loading escalated tickets', error);
  //       }
  //     );
  // }
  @Output() rowClicked = new EventEmitter<number>();

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
    this.apiLink = this.masterService.getApiLinkEscalated();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.rowClicked.emit(rowId);
    this.router.navigate(['manager-view-ticket-detail', rowId]);
  }
}
