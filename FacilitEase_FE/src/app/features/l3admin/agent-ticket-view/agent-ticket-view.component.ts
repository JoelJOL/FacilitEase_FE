import { Component, ViewChild } from '@angular/core';
import { AgentService } from '../../service/httpService/agentSerivce/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TicketDetails } from '@app/ticket-details'; 
import { TicketAttachmentsComponent } from '@app/components/layout/ticket-attachments/ticket-attachments.component';
import { TicketNotesAttachmentsComponent } from '@app/components/layout/ticket-notes-attachments/ticket-notes-attachments.component';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css'],
})
export class AgentTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails!: TicketDetails; // Hold ticket details
  ticketId: number = 0;// Initialize ticket ID
  modalRef: BsModalRef | undefined; // Modal reference
  titleSubAgent: any = [];
  editMode: boolean = true;

  onEditModeChange(editMode: boolean) {
    // Update the editMode value
    this.editMode = editMode;
  }
 

  timelineData: any[] = []; // Placeholder for timeline data

 
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
     // Extract ticket ID from route parameters
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    // Fetch ticket details from service
    this.agentService.getData(this.ticketId).subscribe(
      (ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log('Ticket Details:', this.ticketDetails);

        // Assign sub-agent title and text
        this.titleSubAgent = [
          { heading: 'Raised By', text: this.ticketDetails.employeeName },
          { heading: 'Department', text: this.ticketDetails.deptName },
          { heading: 'Manager', text: this.ticketDetails.managerName },
          {
            heading: 'Project Code',
            text: this.ticketDetails.projectCode.toString(),
          },
          { heading: 'Location', text: this.ticketDetails.locationName },
        ];
      },
      (error) => {
        console.error('API call error:', error);
      }
    );
  }

  // Open modal with ticket details
  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }

 
  resolveTicket(): void {
    if (!this.editMode) {
      console.log("Hi");
      
      const isSaveConfirmed = window.confirm(
        'Save your changes before proceeding?'
      );
    } else {
      console.log(this.editMode);
      const isConfirmed = window.confirm(
        'Are you sure you want to resolve the ticket?'
      );
  
      if (isConfirmed) {
        // Call service to resolve ticket
        this.agentService.resolveTicket(this.ticketId).subscribe(
          (response) => {
            console.log('API call success:', response); 
            alert('Ticket resolved successfully!'); // Show success alert
            this.router.navigate(['l3admin/view-ticket']); // Navigate to view-ticket page
          },
          (error) => {
            console.error('API call error:', error);
          }
        );
      } else {
        console.log('Ticket resolution canceled.');
      }
    }
  }
  
 
}
