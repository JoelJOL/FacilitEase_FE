import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';

@Component({
  selector: 'app-l2admin-subordinates',
  templateUrl: './l2admin-subordinates.component.html',
  styleUrls: ['./l2admin-subordinates.component.css'],
})
export class L2adminSubordinatesComponent {
  headers: string[] = [
    'EmployeeCode',
    'FirstName',
    'LastName',
    'Dob',
    'Email',
    'Gender',
  ];
  apiLink: string = '';

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkL2Subordinates();
  }
}
