import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { l2Admin, AssignedTicketDetails, environment } from 'environments/environment';

@Component({
  selector: 'app-l2-report',
  templateUrl: './l2-report.component.html',
  styleUrls: ['./l2-report.component.css'],
})
export class L2ReportComponent {
  constructor(
    private router: Router,
    private masterService: MasterService,
    private azureService: AzureService
  ) { }
  ticketStatus: number = 10;
  headers: string[] = [
    'ID',
    'Category',
    'Raised By',
    'Raised Date',
    'Closed Date',
    'Priority',
    'Status',
    'Department',
    'Location',
  ];
  ngOnInit(): void {
    this.apiLink = environment.baseUrl+`/api/tickets/admin/${this.azureService.userId}`;
  }
  apiLink: string = '';
  onValueChange(ticketStatus: number) {
    this.ticketStatus = ticketStatus;
    console.log(this.ticketStatus);
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l2Admin}/${AssignedTicketDetails}`, Id]);
  }
}
