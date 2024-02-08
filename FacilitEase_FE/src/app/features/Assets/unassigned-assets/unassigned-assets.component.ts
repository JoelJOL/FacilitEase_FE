import { Component } from '@angular/core';
import { AssetAPIService } from '../../service/httpService/assetService/asset-api.service';
import { Router } from '@angular/router';
import { Asset } from '@app/features/Interface/interface';

@Component({
  selector: 'app-unassigned-assets',
  templateUrl: './unassigned-assets.component.html',
  styleUrls: ['./unassigned-assets.component.css'],
})
export class UnassignedAssetsComponent {
  constructor(private assetService: AssetAPIService, private router: Router) {}

  headers: string[] = [
    'Asset ID',
    'Asset Name',
    'Warranty Info',
    'Last Maintenance Date',
    'Next Maintenance Date',
    'Asset Type',
  ];
  apiLink: string = '';
  ngOnInit(): void {
    this.apiLink = this.assetService.getUnassignedAssets();
  }
  onRowClicked(Id: any) {
    console.log('Row clicked in parent component with ID:', Id);
    //this.router.navigate(['manager/manager-view-ticket-simple', Id]);
  }
}
