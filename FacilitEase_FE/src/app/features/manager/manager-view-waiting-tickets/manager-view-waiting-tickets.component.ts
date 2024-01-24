import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../../../app/features/service/dataService/master.service';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-manager-view-waiting-tickets',
  templateUrl: './manager-view-waiting-tickets.component.html',
  styleUrls: ['./manager-view-waiting-tickets.component.css']
})
export class ManagerViewWaitingTicketsComponent implements OnInit{
  headers: string[] = ['ID', 'Ticket Name', 'Employee Name', 'Assigned To', 'Submitted Date', 'Priority', 'Status'];
  apiLink: string = '';
  title = 'FaciltEase_FE';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Employee Tickets',
    },
    {
      logo: 'assets/data-entry.png',
      title: 'Waiting for Approval',
    },
  ];

  constructor(private masterService: MasterService, private router : Router) {}

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'Employee Tickets') {
      this.router.navigate(['manager-view-employee-tickets']);
    } 
    else if (clickedField.title === 'Waiting For Approval') {
      this.router.navigate(['manager-view-waiting-tickets']);
    }
  }
  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLink2();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    // Add your desired logic here
  }
}
