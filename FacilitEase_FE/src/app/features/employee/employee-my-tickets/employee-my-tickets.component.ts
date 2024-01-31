import { Component } from '@angular/core';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';

@Component({
  selector: 'app-employee-my-tickets',
  templateUrl: './employee-my-tickets.component.html',
  styleUrls: ['./employee-my-tickets.component.css'],
})
export class EmployeeMyTicketsComponent {
  constructor(private masterService: DropDownService) {}
  headers: string[] = [
    'Ticket ID',
    'Ticket Name',
    'Ticket Description',
    'Assigned To',
    'Priority',
    'Status',
  ];

  apiLink: string = '';
  onRowClicked(rowId: any) {
    console.log('Row clicked in parent component with ID:', rowId);
  }
  ngOnInit(): void {
    this.apiLink = `${this.masterService.getMyTickets()}`;
  }
}
