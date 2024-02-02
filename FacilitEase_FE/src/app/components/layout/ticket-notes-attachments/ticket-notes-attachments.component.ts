import { Component, Input, ViewChild } from '@angular/core';
import { TicketNotesComponent } from '../ticket-notes/ticket-notes.component';
import { AgentService } from '@app/features/service/httpService/agent.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-ticket-notes-attachments',
  templateUrl: './ticket-notes-attachments.component.html',
  styleUrls: ['./ticket-notes-attachments.component.css']
})
export class TicketNotesAttachmentsComponent {

  @Input() ticketId: number=0;
  @ViewChild(TicketNotesComponent) ticketNotesComponent!: TicketNotesComponent;

  constructor(private agentService:AgentService){
  }

   // Property to manage edit mode
  editMode: boolean = false

  // Method to toggle edit mode based on the child component's event
  onToggleEditMode() {
    this.editMode = !this.editMode;
  }


  onSubmit() {
    const notes = this.ticketNotesComponent.getNotes();
    console.log(notes);
    if (this.editMode && notes) {
      this.agentService.updateComment(this.ticketId, notes, { responseType: 'text' }).subscribe(
        (response) => {
          // Success response
          console.log('Comment updated successfully');
          console.log('Response:', response);
  
          // Check if the response content matches the success message
          if (response === 'Comment updated successfully') {
            this.editMode = !this.editMode; // Toggle the editMode property
          } else {
            // Handle unexpected response
            console.error('Unexpected response:', response);
          }
        },
        (error) => {
          console.error('Error updating comment:', error);
          console.log('Response:', error.error);
          // Handle the error appropriately
        }
      );
    }
  }
  
  

}
