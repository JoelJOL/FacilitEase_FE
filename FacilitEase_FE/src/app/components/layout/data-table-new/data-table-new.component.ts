import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterComponent } from '../filter/filter.component';
import { Observable } from 'rxjs';
export interface TicketData {
  id: number;
  ticketName: string;
  employeeName: string;
  assignedTo: string;
  submittedDate: string;
  resolvedDate: string;
  priority: string;
  status: string;
}

export interface ApiResponse {
  data: TicketData[];
  totalDataCount: number;
}

@Component({
  selector: 'app-data-table-new',
  templateUrl: './data-table-new.component.html',
  styleUrls: ['./data-table-new.component.css'],
})
export class DataTableNewComponent implements OnInit {
  @ViewChild(FilterComponent) filterModal!: FilterComponent;
  @Input() headers: string[] = [];
  @Input() apiLink!: string;
  @Input() filters: string[] = [];
  rows: any[] = [];
  keys: string[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  sortColumn: string = 'Id';
  sortDirection: string = 'asc';
  totalDataCount: number = 0;
  searchQuery: string = '';
  noRecordsFound:boolean=false;
  loading: boolean = true;

  @Output() totalDataCountChange = new EventEmitter<number>();
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    const url = `${this.apiLink}?sortField=${this.sortColumn}&sortOrder=${this.sortDirection}&pageIndex=${this.currentPage}&pageSize=${this.pageSize}&searchQuery=${this.searchQuery}`;
    
    this.httpClient.get<ApiResponse>(url).subscribe((response) => {
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
      }
    }, (error) => {
      // Handle API call error
      this.loading = false;
      console.error('Error fetching data:', error);
    });
  }
  

  getCellClasses(columnKey: string, cellValue: any) {
    if (columnKey === 'priority') {
      return {
        'low-priority': cellValue === 'Low',
        'medium-priority': cellValue === 'Medium',
        'high-priority': cellValue === 'High',
        'critical-priority': cellValue === 'Critical',
      };
    }
    if (columnKey === 'status') {
      return {
        'open-status': cellValue === 'Open',
        'inprogress-status': cellValue === 'In Progress',
        'onhold-status': cellValue === 'On Hold',
        'resolved-status': cellValue === 'Resolved',
        'cancelled-status': cellValue === 'Cancelled',
        'escalated-status': cellValue === 'Escalated',
      };
    } else {
      return {};
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

  onRowClick(Id: number): void {
    console.log('Clicked on row with Ticket ID:', Id);
    this.rowClicked.emit(Id);
  }
}