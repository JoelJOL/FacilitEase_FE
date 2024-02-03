import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-ticket-notes',
  templateUrl: './ticket-notes.component.html',
  styleUrls: ['./ticket-notes.component.css']
})
export class TicketNotesComponent {
  

  @Input() ticketId: number | undefined;
  constructor(private agentService:AgentService ){

  }
  commentExists: boolean = false;

  ngOnInit(): void {
    this.getCommentText();
  }

  getCommentText() {
    this.agentService.getCommentText(this.ticketId).subscribe(
      (commentText: string) => {
        console.log('Comment Text:', commentText);
        this.form.patchValue({
          notes: commentText
        });
        // Update the commentExists property based on whether commentText is empty or not
        this.commentExists = commentText.trim() !== '';
        // Handle the comment text as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }

  // Input property to receive edit mode from the parent
  @Input() editMode: boolean = false;

  // Output event to notify parent about toggle
  @Output() toggleEditModeEvent = new EventEmitter<void>(); 

  // Event to emit when notes are submitted
  @Output() submitNotesEvent = new EventEmitter<string>();

  //Initialising the form control notes
  form = new FormGroup({
    notes: new FormControl(''),
  
  });

  getNotes(): string {
    const notesControl = this.form ? this.form.get('notes') : null;
  
    return notesControl ? (notesControl.value as string) : '';
  }
  
  // Emit the event to notify the parent
  toggleEditMode() {
    this.toggleEditModeEvent.emit(); 
  }

  
}
