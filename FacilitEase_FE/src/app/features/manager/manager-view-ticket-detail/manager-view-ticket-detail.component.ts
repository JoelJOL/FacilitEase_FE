import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modal.service';
import { MasterService } from '@app/features/service/dataService/master.service';
export interface TicketDetails {
  id: number;
  ticketName: string;
  employeeName: string;
  assignedTo: string;
  submittedDate: string;
  priorityName: string;
  statusName: string;
  ticketDescription: string;
  documentLink: string;
}
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-manager-view-ticket-detail',
  templateUrl: './manager-view-ticket-detail.component.html',
  styleUrls: ['./manager-view-ticket-detail.component.css']
})
export class ManagerViewTicketDetailComponent {
  ticketId: number = 5;
  ticketDetails!: TicketDetails;
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
  constructor(
    private router: Router,
    private masterService: MasterService,
    private myModalService: ModalService
  ) {}
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
    this.masterService.getManagerTicketDetails(this.ticketId).subscribe(
      (response: TicketDetails) => {
        this.ticketDetails = response;
        console.log('Ticket Details:', this.ticketDetails);
      },
      (error: any) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }
  onRowClicked(rowId: number): void {
    // Update the ticketId when a row is clicked
    this.ticketId = rowId;
    // Fetch ticket details for the new ticketId
    this.masterService.getManagerTicketDetails(this.ticketId).subscribe(
      (response: TicketDetails) => {
        this.ticketDetails = response;
        console.log('Ticket Details:', this.ticketDetails);
      },
      (error: any) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }
}
