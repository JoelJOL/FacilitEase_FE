import { Component, Input, ViewChild } from '@angular/core';
import { TicketNotesAttachmentsComponent } from '../ticket-notes-attachments/ticket-notes-attachments.component';

@Component({
  selector: 'app-ticket-detail-view',
  templateUrl: './ticket-detail-view.component.html',
  styleUrls: ['./ticket-detail-view.component.css']
})
export class TicketDetailViewComponent {
  customHeaderText = 'Supported Attachments';  
  @ViewChild(TicketNotesAttachmentsComponent) ticketNotesAttachmentsComponent!: TicketNotesAttachmentsComponent;
  editMode: boolean = false; // Property to hold edit mode value
 
  
  @Input() ticketDetails!: any;
  @Input() headings: any[] = [];
  
  constructor() {} 
  @Input() ticketId: number=0; 
  ngOnInit(){
    console.log(this.ticketId);
    console.log(this.editMode);
  }


  // Method to capture edit mode change
  onEditModeChange(editMode: boolean) {
    this.editMode = editMode; // Update the edit mode value
  }
  
  
}
