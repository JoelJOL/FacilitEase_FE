// data-table.component.ts

import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
interface CustomSortEvent extends Sort, PageEvent {}
export interface TicketData {
  id: number;
  ticketName: string;
  employeeName: string;
  assignedTo: string;
  submittedDate: string;
  priority: string;
  status: string;
}

export interface ApiResponse {
  data: TicketData[];
  totalDataCount: number;
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})

export class DataTableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() apiLink: string = '';
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  keys: string[] = [];
  pageSize : number = 10;
  sortDirection : string = 'asc'
  
  

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
    this.dataSource.sort = this.sort;
  }

  private loadData(pageIndex: number = 0, pageSize: number = this.pageSize, sortField: string = 'Id', sortOrder: string = 'asc') {
    const params = new HttpParams({
      fromObject: {
        pageIndex: pageIndex.toString(),
        pageSize: pageSize.toString(),
        sortField: sortField || this.sort.active,
        sortOrder: sortOrder || this.sort.direction,
      },
    });
  
    const apiUrlWithSort = `${this.apiLink}?sortField=${sortField}&sortOrder=${sortOrder}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
  
    this.httpClient.get<any[]>(apiUrlWithSort, { params }).subscribe((data) => {
      this.dataSource.data = data;
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.keys = Object.keys(data[0]);
      // this.paginator.length = 100;
  
      const pageEvent: PageEvent = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        length: data.length,
      };
  
      this.page.emit(pageEvent);
    });
  }

  onSortChanged(event: Sort) {
    if(this.sortDirection === 'asc')
    {
        this.sortDirection = 'desc';
    }
    else{
      this.sortDirection = 'asc';
    }
    const sortField = event.active;
    const sortOrder = this.sortDirection;
    this.loadData(0,this.pageSize,sortField,sortOrder);
  }

  onPaginatorChange(event: PageEvent) {
      // Handle paginator change, e.g., fetch data from the server
      this.loadData(event.pageIndex, event.pageSize);
    }
  }
