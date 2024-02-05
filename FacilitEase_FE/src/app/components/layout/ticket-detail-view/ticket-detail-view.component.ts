import { Component, Input } from '@angular/core';
import { TicketDetails } from '@app/ticket-details'; 

@Component({
  selector: 'app-ticket-detail-view',
  templateUrl: './ticket-detail-view.component.html',
  styleUrls: ['./ticket-detail-view.component.css']
})
export class TicketDetailViewComponent {
  customHeaderText = 'Supported Attachments';  
  constructor() {} 
  @Input() ticketId: number=0; 
  ngOnInit(){
    console.log(this.ticketId);
  }
  @Input() ticketDetails!: any;
  @Input() headings: any[] = [];
  
}
