import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { DepartmentHeadService } from '@app/features/service/httpService/Department-head/department-head.service';

@Component({
  selector: 'app-department-head-data-table',
  templateUrl: './department-head-data-table.component.html',
  styleUrls: ['./department-head-data-table.component.css'],
})
export class DepartmentHeadDataTableComponent implements OnInit {
  @Output() rowClicked = new EventEmitter<number>();
  headers: string[] = [
    'ID',
    'Ticket Name',
    'Employee Name',
    'Dept.',
    'Location',
    'Assigned To',
    'Submitted Date',
    'Priority',
    'Status',
  ];
  apiLink: string = '';

  constructor(
    private departmentHeadService: DepartmentHeadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiLink = this.departmentHeadService.getApiLink();
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);

    this.router.navigate(['departmenthead/department-head-tc-detail', Id]);
  }
}
