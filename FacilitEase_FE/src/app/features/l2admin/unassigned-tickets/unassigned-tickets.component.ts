import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DropDownService } from '@app/features/service/httpService/dropDownService/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import {
  AssignedTickets,
  CancellationRequest,
  EscalatedTickets,
  TicketsToResolve,
  UnassignedTicketDetails,
  UnassignedTickets,
  l2Admin,
} from 'environments/environment';
import { ApiResponse } from '@app/components/layout/data-table-new/data-table-new.component';
import { FilterComponent } from '@app/components/layout/filter/filter.component';
import { direction } from 'html2canvas/dist/types/css/property-descriptors/direction';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unassigned-tickets',
  templateUrl: './unassigned-tickets.component.html',
  styleUrls: ['./unassigned-tickets.component.css'],
})
export class UnassignedTicketsComponent {
  // headers: string[] = [
  //   'Id',
  //   'Ticket Name',
  //   'Raised By',
  //   'Submitted Date',
  //   'Priority',
  //   'Status',
  //   'Department',
  //   'Location',
  // ];
  // apiLink: string = '';

  // constructor(
  //   private masterService: MasterService,
  //   private router: Router,
  //   private sidebarService: SidebarService
  // ) {}

  // ngOnInit(): void {
  //   this.apiLink = this.masterService.getApiLinkUnassigned();
  // }

  // onRowClicked(Id: any) {
  //   console.log('Row clicked in parent component with ID:', Id);
  //   this.router.navigate([`${l2Admin}/${UnassignedTicketDetails}`, Id]);
  // }
  activeBox: number = 1;
  @ViewChild(FilterComponent) filterModal!: FilterComponent;
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Raised By',
    'Submitted Date',
    'Priority',
    'Assign To',
    'Department',
    'Location',
  ];
  @Input() filters: string[] = [];
  rows: any[] = [];
  keys: string[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  sortColumn: string = 'SubmittedDate';
  sortDirection: string = 'desc';
  totalDataCount: number = 0;
  searchQuery: string = '';
  noRecordsFound: boolean = false;
  loading: boolean = true;

  @Output() totalDataCountChange = new EventEmitter<number>();
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  ticketId!: number;

  constructor(
    private http: HttpClient,
    private dropDownService: DropDownService,
    private router: Router,
    private azureService: AzureService,
    private masterService: MasterService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }
  apiLink = this.masterService.getApiLinkUnassigned();

  ngOnInit(): void {
    // Check if "SubmittedDate" exists in headers array
    if (!this.headers.includes('SubmittedDate')) {
      // If "SubmittedDate" doesn't exist, use "Id" as the default column
      this.sortColumn = 'Id';
    }

    this.loadData();
    this.loadAgents();
  }

  private loadData() {
    this.loading = true;

    const url = `${this.apiLink}?sortField=${this.sortColumn}&sortOrder=${this.sortDirection}&pageIndex=${this.currentPage}&pageSize=${this.pageSize}&searchQuery=${this.searchQuery}`;

    this.http.get<ApiResponse>(url).subscribe(
      (response) => {
        if (response.data && response.data.length > 0) {
          // Data is available, update datatable
          this.totalDataCount = response.totalDataCount;
          this.totalDataCountChange.emit(this.totalDataCount);
          this.rows = response.data;
          this.keys = Object.keys(this.rows[0]);
          this.loading = false;
        } else {
          // No records found, handle accordingly (e.g., display a message)
          console.log('No records found');
          this.noRecordsFound = true;
          this.loading = false;
        }
      },
      (error) => {
        // Handle API call error
        this.loading = false;
        console.error('Error fetching data:', error);
      }
    );
  }
  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getCellClasses(columnKey: string, cellValue: any) {
    if (columnKey === 'priority') {
      return {
        low_priority: cellValue === 'Low',
        medium_priority: cellValue === 'Medium',
        high_priority: cellValue === 'High',
        critical_priority: cellValue === 'Critical',
      };
    }
    if (columnKey === 'id') {
      return {
        id_column: true, // Add the class 'id_column' for cells in the "Id" column
      };
    }
    if (columnKey === 'status') {
      return {
        open_status: cellValue === 'Open',
        inprogress_status: cellValue === 'In Progress',
        onhold_status: cellValue === 'Pending Approval',
        resolved_status: cellValue === 'Closed',
        cancelled_status: cellValue === 'Cancelled',
        escalated_status: cellValue === 'Escalated',
        cancelrequested_status: cellValue === 'Cancel Requested',
      };
    } else {
      return {};
    }
  }
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
  onCellClicked(key: string, rowId: any, event: MouseEvent) {
    // Check if the click is on the dropdown div
    if (
      key === 'assignTo' &&
      (event.target as HTMLElement).classList.contains('assign_dropdown')
    ) {
      // Handle dropdown click
      this.onDropDownClicked(rowId);
    } else {
      // Handle row click (open ticket details route)
      this.onRowClicked(rowId);
    }
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    this.router.navigate([`${l2Admin}/${UnassignedTicketDetails}`, Id]);
  }
  onDropDownClicked(Id: number): void {
    this.ticketId = Id;
    console.log(`ticket id is ${this.ticketId}`);
  }
  onAgentSelected(selectedAgent: number, ticketId: number) {
    if (this.ticketId) {
      const userId = this.azureService.userId;
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
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          // this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
          this.http
            .put('https://localhost:7049/api/l2/assign-ticket', data, {
              responseType: 'text',
            })
            .subscribe(
              (response: any) => {
                this.reloadComponent();
                console.log('Ticket assigned successfully', response);
                this.toastr.success('Ticket assigned successfully!', 'Success');
                // this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
              },
              (error: any) => {
                console.error('Error assigning ticket', error);
              }
            );
        } else {
          // this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
          this.reloadComponent();
        }
      });
    }
  }
  changePage(page: number) {
    this.currentPage = page;
    this.loadData();
  }
  onSort(column: string, direction: string): void {
    this.sortColumn = column;
    this.sortDirection = direction;
    this.loadData();
  }
  search(searchQuery: string): void {
    this.noRecordsFound = false;

    // Set the new search query
    this.searchQuery = searchQuery;

    // Reset current page to 0 when performing a new search
    this.currentPage = 0;

    // Load data
    this.loadData();
  }

  activateBox(boxNumber: number) {
    this.activeBox = boxNumber;
    if (this.activeBox === 1) {
      this.router.navigate([`${l2Admin}/${UnassignedTickets}`]);
    } else if (this.activeBox === 2) {
      this.router.navigate([`${l2Admin}/${AssignedTickets}`]);
    } else if (this.activeBox === 3) {
      this.router.navigate([`${l2Admin}/${EscalatedTickets}`]);
    } else if (this.activeBox === 4) {
      this.router.navigate([`${l2Admin}/${TicketsToResolve}`]);
    } else if (this.activeBox === 5) {
      this.router.navigate([`${l2Admin}/${CancellationRequest}`]);
    }
  }
}
