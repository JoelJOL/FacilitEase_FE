import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() apiLink: string = '';
  @Output() RowClicked: EventEmitter<any> = new EventEmitter<any>();
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]); // Initialize with an empty array
  keys: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.httpClient.get<any[]>(this.apiLink).subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.keys = Object.keys(data[0]);
    });
  }
  onRowClick(rowId: number) {
    // Emit the event with the rowId to the parent component
    this.RowClicked.emit(rowId);
  }
}
