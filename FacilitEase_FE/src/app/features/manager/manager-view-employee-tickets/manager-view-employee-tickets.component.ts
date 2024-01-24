import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../../app/features/service/dataService/master.service';
import { DataTableComponent } from '../../../../app/components/layout/data-table/data-table.component';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-manager-view-employee-tickets',
  templateUrl: './manager-view-employee-tickets.component.html',
  styleUrls: ['./manager-view-employee-tickets.component.css'],
})

export class ManagerViewEmployeeTicketsComponent implements OnInit {
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
  showManagerTickets: boolean = false;
  constructor(private masterService: MasterService, private router : Router) {}

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'Employee Tickets') {
      this.router.navigate(['manager-view-employee-tickets']);
    } 
    else if (clickedField.title === 'Waiting for Approval') {
      this.router.navigate(['manager-view-waiting-tickets']);
    }
  }
  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLink();
  }
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    
  }
}
