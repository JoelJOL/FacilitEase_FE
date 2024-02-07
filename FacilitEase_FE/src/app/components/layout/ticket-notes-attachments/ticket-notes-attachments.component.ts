import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TicketNotesComponent } from '../ticket-notes/ticket-notes.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-ticket-notes-attachments',
  templateUrl: './ticket-notes-attachments.component.html',
  styleUrls: ['./ticket-notes-attachments.component.css']
})
export class TicketNotesAttachmentsComponent {

  @Input() ticketId: number=0;
  @ViewChild(TicketNotesComponent) ticketNotesComponent!: TicketNotesComponent;
  @Output() reloadChildComponent: EventEmitter<void> = new EventEmitter<void>();
  refreshChild: boolean = false;
  lastUpdate:any;

  toggleRefresh() {
    this.refreshChild = !this.refreshChild;
  }

  

  constructor(private agentService:AgentService){
  }

   // Property to manage edit mode
  editMode: boolean = false

  // Method to toggle edit mode based on the child component's event
  onToggleEditMode() {
    this.editMode = !this.editMode;
  }

 

 



  onSubmit() {
    const notes = this.ticketNotesComponent.getNotes().trim();
    console.log(notes);
  
    if (!this.ticketNotesComponent.commentExists) {
      // If comment doesn't exist, it's a new comment, proceed with the add logic
      this.agentService.addComment(notes,this.ticketId).subscribe(
        (response) => {
          // Handle the response appropriately (similar to your existing code)
          console.log('Comment added successfully');
          console.log('Response:', response);
  
          if (response === 'Comment added successfully') {
            this.editMode = !this.editMode; // Toggle the editMode property
          } else {
            console.error('Unexpected response:', response);
          }
        },
        (error) => {
          console.error('Error adding comment:', error);
          console.log('Response:', error.error);
          // Handle the error appropriately
        }
      );
    } else if (this.editMode) {
      // If comment exists and editMode is true, proceed with the update logic
      this.agentService.updateComment(this.ticketId, notes, { responseType: 'text' }).subscribe(
        (response) => {
          // Handle the response appropriately (similar to your existing code)
          console.log('Comment updated successfully');
          console.log('Response:', response);
  
          if (response === 'Comment updated successfully') {
            this.editMode = !this.editMode; // Toggle the editMode property
          } else {
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
    this.reloadChildComponent.emit();
  }
  

}

  
 
