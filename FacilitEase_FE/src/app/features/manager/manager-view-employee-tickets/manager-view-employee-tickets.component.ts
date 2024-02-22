import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MasterService } from '../../service/dataService/masterService/master.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeTicketDetails, Manager } from 'environments/environment';
@Component({
  selector: 'app-manager-view-employee-tickets',
  templateUrl: './manager-view-employee-tickets.component.html',
  styleUrls: ['./manager-view-employee-tickets.component.css'],
})
export class ManagerViewEmployeeTicketsComponent implements OnInit {
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Employee Name',
    'Location',
    'Assigned To',
    'Submitted Date',
    'Priority',
    'Status',
  ];
  apiLink: string = '';

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLink();
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${Manager}/${EmployeeTicketDetails}`, Id]);
  }
}
