import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-notes-attachments',
  templateUrl: './ticket-notes-attachments.component.html',
  styleUrls: ['./ticket-notes-attachments.component.css']
})
export class TicketNotesAttachmentsComponent {
  @Input() ticketId: number | undefined;

   // Property to manage edit mode
  editMode: boolean = false;

  // Method to toggle edit mode based on the child component's event
  onToggleEditMode() {
    this.editMode = !this.editMode;
  }
}
