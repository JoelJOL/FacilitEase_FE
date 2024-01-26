import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table-new',
  templateUrl: './data-table-new.component.html',
  styleUrls: ['./data-table-new.component.css']
})
export class DataTableNewComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() apiLink: string = '';
  rows: any[] = [];
  keys: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.httpClient.get<any[]>(this.apiLink).subscribe(data => {
      if (data.length > 0) {
        this.keys = Object.keys(data[0]);
        this.rows = data;
      }
    });
  }
  getCellClasses(columnKey: string, cellValue: any) {
    if (columnKey === 'priority') {
      return {
        'high-priority': cellValue === 'High'
        // Add more conditions for other priority values
      };
    } else if (columnKey === 'status') {
      return {
        'open-status': cellValue === 'Open'
        // Add more conditions for other status values
      };
    }
    return {}; // Return an empty object if no specific class is needed
  }
}
