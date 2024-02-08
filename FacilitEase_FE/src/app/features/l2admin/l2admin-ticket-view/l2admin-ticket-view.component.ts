import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modalService/modal.service';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-l2admin-ticket-view',
  templateUrl: './l2admin-ticket-view.component.html',
  styleUrls: ['./l2admin-ticket-view.component.css'],
})
export class L2adminTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketDetails: any = [];
  modalRef: BsModalRef | undefined;
  ticketId: any;

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}
  titleSubHeadings: any = [];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['Id']);
      console.log(this.ticketId);
    });

    this.agentService.getTicketData(this.ticketId).subscribe((data) => {
      console.log('API Response:', data);
      this.ticketDetails = data;
      console.log('Ticket Details:', this.ticketDetails);
      this.titleSubHeadings = [
        { heading: 'Raised By', text: this.ticketDetails.employeeName },
        { heading: 'Department', text: this.ticketDetails.deptName },
        { heading: 'Manager', text: this.ticketDetails.managerName },
        { heading: 'Project Code', text: this.ticketDetails.projectCode },
        { heading: 'Location', text: this.ticketDetails.locationName },
      ];
    });
    this.loadAgents();
  }
  unassignedTickets: any[] = [];

  agents: any[] = [];
  selectedAgent: any;

  private loadAgents() {
    this.dropDownService.getAgents().subscribe(
      (agents: any[]) => {
        this.agents = agents;
        console.log(agents);
      },
      (error) => {
        console.error('Error loading agents', error);
      }
    );
  }
  onAgentSelected(selectedAgent: number, ticketId: number) {
    const userId = 2;
    const data = {
      ticketId: ticketId,
      agentId: selectedAgent,
      userId: userId,
    };
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: 'Are you sure you want to assign the agent?',
    });
    console.log(selectedAgent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http
          .put('https://localhost:7049/api/l2/assign-ticket', data, {
            responseType: 'text',
          })
          .subscribe(
            (response) => {
              console.log('Ticket assigned successfully', response);
            },
            (error) => {
              console.error('Error assigning ticket', error);
            }
          );
      }
    });
  }
}
