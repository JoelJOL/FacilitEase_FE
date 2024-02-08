import { Component } from '@angular/core';
import { AgentService } from '../../service/httpService/agentSerivce/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TicketDetails } from '@app/ticket-details'; 
import { TrackingModalComponent } from '@app/components/layout/tracking-modal/tracking-modal.component';

@Component({
  selector: 'app-agent-ticket-view',
  templateUrl: './agent-ticket-view.component.html',
  styleUrls: ['./agent-ticket-view.component.css'],
})
export class AgentTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails!: TicketDetails;
  ticketId: number = 0;
  modalRef: BsModalRef | undefined;
  titleSubAgent: any = [];
 

  timelineData: any[] = []; // Assign your timeline data here

 
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    this.agentService.getData(this.ticketId).subscribe(
      (ticketDetails: TicketDetails) => {
        this.ticketDetails = ticketDetails;
        console.log('Ticket Details:', this.ticketDetails);

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

  openModal(ticketDetails: any) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState: {
        ticketDetails: ticketDetails,
      },
    });
  }


  resolveTicket(): void {
    const isConfirmed = window.confirm(
      'Are you sure you want to resolve the ticket?'
    );

    if (isConfirmed) {
      this.agentService.resolveTicket(this.ticketId).subscribe(
        (response) => {
          console.log('API call success:', response);
          alert('Ticket resolved successfully!');
          this.router.navigate(['l3admin/view-ticket']);
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
