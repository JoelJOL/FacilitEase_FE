import { Component, Input } from '@angular/core';
import { MasterService } from '@app/features/service/dataService/master.service';

@Component({
  selector: 'app-ticket-na-simple',
  templateUrl: './ticket-na-simple.component.html',
  styleUrls: ['./ticket-na-simple.component.css']
})
export class TicketNaSimpleComponent {
  @Input() notes:string = 'Default Notes';
  @Input() lastupdate:string = 'Default time';
constructor(){}
ngOnInit(){

}
}
