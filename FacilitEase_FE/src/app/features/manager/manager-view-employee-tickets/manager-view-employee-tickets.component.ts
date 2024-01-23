import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../../app/features/service/dataService/master.service';
import { DataTableComponent } from '../../../../app/components/layout/data-table/data-table.component';

@Component({
  selector: 'app-manager-view-employee-tickets',
  templateUrl: './manager-view-employee-tickets.component.html',
  styleUrls: ['./manager-view-employee-tickets.component.css'],
})
export class ManagerViewEmployeeTicketsComponent implements OnInit {
  headers: string[] = ['ID', 'Ticket Name', 'Employee Name', 'Assigned To', 'Submitted Date', 'Priority', 'Status'];
  apiLink: string = '';

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLink();
  }
}
