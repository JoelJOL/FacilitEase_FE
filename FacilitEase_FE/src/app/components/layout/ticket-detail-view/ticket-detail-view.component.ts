import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TicketNotesAttachmentsComponent } from '../ticket-notes-attachments/ticket-notes-attachments.component';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Component({
  selector: 'app-ticket-detail-view',
  templateUrl: './ticket-detail-view.component.html',
  styleUrls: ['./ticket-detail-view.component.css']
})
export class TicketDetailViewComponent {
  userEmail: string = "joel.jose@experionglobal.com" // Email ID for chat
  customHeaderText = 'Supported Attachments'; // Custom header text for the component  
  editMode: boolean = false; // Property to hold edit mode value
  @Output() editModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  currentUserId: number = this.azureService.userId;
  selectedTab: string = 'Details'; // Tab Selection Variable

  // Input properties
  @Input() ticketDetails!: any; // Holds ticket details
  @Input() headings: any[] = []; // Array of headings
  @Input() ticketId: number = 0; // Holds ticket ID

  @ViewChild(TicketNotesAttachmentsComponent) ticketNotesAttachmentsComponent!: TicketNotesAttachmentsComponent;

  constructor(private azureService: AzureService) {
  }

  // Method to capture edit mode change
  onEditModeChange(editMode: boolean) {
    this.editMode = editMode; // Update the edit mode value
    this.editModeChanged.emit(this.editMode);
    console.log(this.editMode);
  }

  // Method to open the teams chat when button is clicked
  goToTeams() {
    let n = "Hey " + "\nCongratulations on being a fool 🎉...";
    location.href = "MSTeams:/l/chat/0/0?users=" + this.userEmail + "&message= " + n;
  }

}
