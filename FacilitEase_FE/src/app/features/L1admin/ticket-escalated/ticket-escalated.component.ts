import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';

@Component({
  selector: 'app-ticket-escalated',
  templateUrl: './ticket-escalated.component.html',
  styleUrls: ['./ticket-escalated.component.css'],
})
export class TicketEscalatedComponent {
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

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getEscalatedTicketForL1Admin();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate(['l1admin/details-escalated', rowId]);
  }
}
