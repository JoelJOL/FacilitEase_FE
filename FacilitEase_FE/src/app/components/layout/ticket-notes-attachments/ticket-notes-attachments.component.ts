import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { TicketNotesComponent } from '../ticket-notes/ticket-notes.component';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-notes-attachments',
  templateUrl: './ticket-notes-attachments.component.html',
  styleUrls: ['./ticket-notes-attachments.component.css']
})
export class TicketNotesAttachmentsComponent {

  @Input() ticketId: number=0;
  @ViewChild(TicketNotesComponent) ticketNotesComponent!: TicketNotesComponent;
  @Output() editModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>(); // EventEmitter to emit editMode changes
  lastUpdate:any;
  editMode: boolean = false; // Property to manage edit mode
  changesMade: boolean = false; // Flag to track changes

  constructor(private agentService:AgentService){
  }

  // Method to toggle edit mode based on the child component's event
  onToggleEditMode() {
    this.editMode = !this.editMode;
    this.editModeChanged.emit(this.editMode);
    console.log("This is being emitted!");
  }


  
  //Action to be performed on submit
  onSubmit() {
    console.log("From the submit",this.editMode);

    const notes = this.ticketNotesComponent.getNotes().trim();
    console.log(notes);
  
    if (!this.ticketNotesComponent.commentExists) {
      // If comment doesn't exist, it's a new comment, proceed with the add logic
      this.agentService.addComment(notes,this.ticketId).subscribe(
        (response) => {
          // Handle the response appropriately (similar to your existing code)
          console.log('Comment posted successfully');
          console.log('Response:', response);
  
          if(response && response.message === 'Comment posted successfully')  {
            this.editMode = !this.editMode; // Toggle the editMode property
            this.editModeChanged.emit(this.editMode);
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
    } else if (this.editMode && notes !== '') {
      // If comment exists and editMode is true, proceed with the update logic
      this.agentService.updateComment(this.ticketId, notes, { responseType: 'text' }).subscribe(
        (response) => {
          // Handle the response appropriately (similar to your existing code)
          console.log('Comment updated successfully');
          console.log('Response:', response);
  
          if (response === 'Comment updated successfully') {
            this.editMode = !this.editMode; // Toggle the editMode property
            this.editModeChanged.emit(this.editMode);
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
    } else if (this.editMode && notes === '') {
      // If editMode is true and notes are empty, check if the comment exists before proceeding with delete logic
      if (this.ticketNotesComponent.commentExists) {
        this.agentService.deleteComment(this.ticketId).subscribe(
          (response) => {
            // Handle the response appropriately 
            console.log('Comment deleted successfully');
            console.log('Response:', response);
    
            if (response === 'Comment deleted successfully') {
              this.editMode = !this.editMode; // Toggle the editMode property
            } else {
              console.error('Unexpected response:', response);
            }
          },
          (error) => {
            console.error('Error deleting comment:', error);
            console.log('Response:', error.error);
            // Handle the error appropriately
          }
        );
      } else {
        console.log('No comment exists. Nothing to delete.');
        this.editMode = !this.editMode; // Toggle the editMode property
        this.editModeChanged.emit(this.editMode);
      }
    }
    
    
  }

 
}

  
 
