import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';

@Component({
  selector: 'app-l2-cancellation',
  templateUrl: './l2-cancellation.component.html',
  styleUrls: ['./l2-cancellation.component.css'],
})
export class L2CancellationComponent {
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
    this.apiLink = this.masterService.getApiLinkCancellationRequests();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate(['l2admin/details-l2-cancel', rowId]);
  }
}
