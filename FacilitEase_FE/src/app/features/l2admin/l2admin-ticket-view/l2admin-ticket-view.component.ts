import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modalService/modal.service';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {
  UnassignedTicketDetails,
  UnassignedTickets,
  l2Admin,
} from 'environments/environment';
import { map } from 'rxjs/operators';
import { SlaEditModalComponent } from '../components/sla-edit-modal/sla-edit-modal.component';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

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
  currentUserId: number = this.azureService.userId;
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private azureService: AzureService
  ) { }
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
      data: 'Do you confirm the ticket assigning?',
    });
    console.log(selectedAgent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.get(`https://localhost:7049/api/l2/SLATicketInfo/${ticketId}`)
          .pipe(
            map((resolvingTime: any) => {
              // Adjust this based on the actual response structure
              // Assuming resolvingTime is a string representing datetime
              return new Date(resolvingTime.toString());
            })
          )
          .subscribe((resolvingTime: Date) => {
            const dialogRef = this.dialog.open(SlaEditModalComponent, {
              width: '400px',
              data: { resolvingTime: resolvingTime, ticketId: ticketId }
            });
          }
          );
        this.http
          .put('https://localhost:7049/api/l2/assign-ticket', data, {
            responseType: 'text',
          })
          .subscribe(
            (response) => {
              console.log('Ticket assigned successfully', response);
              this.toastr.success('Ticket assigned successfully!', 'Success');
              this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
            },
            (error) => {
              console.error('Error assigning ticket', error);
            }
          );
      } else {
        this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
      }
    });
  }
  editMode: boolean = false; // Property to hold edit mode value
  @Output() editModeChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  onEditModeChange(editMode: boolean) {
    this.editMode = editMode; // Update the edit mode value
    this.editModeChanged.emit(this.editMode);
    console.log('Captured!');
    console.log(this.editMode);
  }

  isFileUploaded = false;

  onFileUploaded() {
    this.isFileUploaded = true;
  }
}
