import { Component } from '@angular/core';
import { MasterService } from '@app/features/service/dataService/master.service';

@Component({
  selector: 'app-l2admin-subordinates',
  templateUrl: './l2admin-subordinates.component.html',
  styleUrls: ['./l2admin-subordinates.component.css'],
})
export class L2adminSubordinatesComponent {
  headers: string[] = [
    'employeeCode',
    'firstName',
    'lastName',
    'dob',
    'email',
    'gender',
  ];
  apiLink: string = '';

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkL2Subordinates();
  }
}
