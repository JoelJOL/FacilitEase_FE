import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { TicketDetails, l1Admin } from 'environments/environment';

@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css'],
})
export class ViewAllTicketsComponent {
  constructor(private masterService: MasterService, private router: Router) {}
  headers: string[] = [
    'Ticket ID',
    'Ticket Name',
    'Raised By',
    'Priority',
    'Status',
    'Location',
    'Department',
    'Submitted Date',
    'Assigned To',
  ];
  ngOnInit(): void {
    this.apiLink = this.masterService.getAllTicketsForL1Admin();
  }
  apiLink: string = '';
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate([`${l1Admin}/${TicketDetails}`, rowId]);
  }
}
