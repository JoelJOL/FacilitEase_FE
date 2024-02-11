import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../service/dataService/masterService/master.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-manager-view-waiting-tickets',
  templateUrl: './manager-view-waiting-tickets.component.html',
  styleUrls: ['./manager-view-waiting-tickets.component.css']
})
export class ManagerViewWaitingTicketsComponent implements OnInit{
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
  apiLink: string ='';

  constructor(private masterService: MasterService, private router : Router) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLink2();
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate(['manager/manager-view-ticket-detail', Id]);
  }
}
