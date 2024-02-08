import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';

@Component({
  selector: 'app-manager-view-live-employee-tickets',
  templateUrl: './manager-view-live-employee-tickets.component.html',
  styleUrls: ['./manager-view-live-employee-tickets.component.css']
})
export class ManagerViewLiveEmployeeTicketsComponent {
    headers: string[] = [
      'ID',
      'Ticket Name',
      'Employee Name',
      'Assigned To',
      'Submitted Date',
      'Priority',
      'Status',
    ];
    apiLink: string = '';
  
    constructor(private masterService: MasterService, private router: Router) {}
  
    ngOnInit(): void {
      this.apiLink = this.masterService.getApiLink3();
    }
    onRowClicked(Id: any) {
      console.log('Row clicked in parent component with ID:', Id);
      this.router.navigate(['manager/manager-view-ticket-simple', Id]);
    }
  
}
