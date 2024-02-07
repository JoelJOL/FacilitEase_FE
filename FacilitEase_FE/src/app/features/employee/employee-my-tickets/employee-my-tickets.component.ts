import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';

@Component({
  selector: 'app-employee-my-tickets',
  templateUrl: './employee-my-tickets.component.html',
  styleUrls: ['./employee-my-tickets.component.css'],
})
export class EmployeeMyTicketsComponent {
  constructor(private masterService: DropDownService, private router: Router) {}
  headers: string[] = [
    'Ticket ID',
    'Ticket Name',
    'Status',
    'Assigned To',
    'Priority',
    'Submitted Date',
  ];

  apiLink: string = '';
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
    this.router.navigate(['employee/request', rowId]);
  }
  ngOnInit(): void {
    const userId = 7;
    this.apiLink = this.masterService.getMyTickets(userId);
  }
}
