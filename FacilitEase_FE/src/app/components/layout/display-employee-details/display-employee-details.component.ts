import { Component, Input, Output } from '@angular/core';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';

interface EmpDetails {
  employeeName: string;
  dob: string;
  gender: string;
  username: string;
}

@Component({
  selector: 'app-display-employee-details',
  templateUrl: './display-employee-details.component.html',
  styleUrls: ['./display-employee-details.component.css'],
})
export class DisplayEmployeeDetailsComponent {
  constructor(private searchService: SearchService) {}
  @Input()
  titles: string[] = [];
  data: EmpDetails = {
    gender: '',
    employeeName: '',
    dob: '',
    username: '',
  };
  @Input()
  heading: string = '';
  @Input()
  getId: number = 0;
  ngOnChanges() {
    // this.data = [];
    // console.log(this.getId);
    this.searchService
      .GetEmployeeDetails(this.getId)
      .subscribe((data: EmpDetails) => {
        // data.forEach((element) => {
        //   this.data.push(Object.values(element)[0]);
        //   this.data.push(Object.values(element)[1]);
        //   this.data.push(Object.values(element)[2]);
        //   this.data.push(Object.values(element)[3]);
        // });
        console.log(data);
      });
  }
}
