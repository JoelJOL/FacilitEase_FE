import { Component } from '@angular/core';
import { AssetAPIService } from '@app/features/service/httpService/assetService/asset-api.service';
import { Router } from '@angular/router';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';

@Component({
  selector: 'app-employee-assets',
  templateUrl: './employee-assets.component.html',
  styleUrls: ['./employee-assets.component.css'],
})
export class EmployeeAssetsComponent {
  apiLink: string = '';
  empId: number = 0;

  constructor(
    private assetService: AssetAPIService,
    private router: Router,
    private searchService: SearchService
  ) {}

  headers: string[] = [
    'Asset ID',
    'Asset Name',
    'Warranty Info',
    'Last Maintenance Date',
    'Next Maintenance Date',
    'Asset Type',
  ];

  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    //this.router.navigate(['manager/manager-view-ticket-simple', Id]);
  }

  GetId($event: number) {
    this.empId = $event;
    console.log(this.empId);
    this.setApiLink(this.empId);
  }

  public setApiLink(empId: number): void {
    const userId = empId;
    this.apiLink = this.assetService.getEmployeeAssets(userId);
    console.log('User id passed is ' + userId);
  }
}
