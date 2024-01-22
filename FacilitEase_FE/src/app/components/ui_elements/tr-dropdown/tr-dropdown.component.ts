import { Component, Input } from '@angular/core';
import { DropDrownService } from 'src/app/features/service/httpService/drop-drown.service';

@Component({
  selector: 'app-tr-dropdown',
  templateUrl: './tr-dropdown.component.html',
  styleUrls: ['./tr-dropdown.component.css']
})
export class TrDropdownComponent {
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() displayKey: string = ''; 

}
