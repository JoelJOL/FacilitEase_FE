import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-detail-view-noedit',
  templateUrl: './ticket-detail-view-noedit.component.html',
  styleUrls: ['./ticket-detail-view-noedit.component.css']
})
export class TicketDetailViewNoeditComponent {
  customHeaderText = 'Supported Attachments';  
  constructor( ) {} 
  @Input() ticketId: number=0; 
  ngOnInit(){
    console.log(this.ticketId);
  }
  @Input() ticketDetails: any;
  @Input() headings: any[] = [];
}
