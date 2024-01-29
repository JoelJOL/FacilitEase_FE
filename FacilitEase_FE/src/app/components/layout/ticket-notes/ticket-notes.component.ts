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
  ngOnInit(): void {
    this.getCommentText();
  }
  getCommentText() {
    this.agentService.getCommentText(this.ticketId).subscribe(
      (commentText: string) => {
        console.log('Comment Text:', commentText);
        this.form.patchValue({
          notes: commentText
        })
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

  //Initialising the form control notes
  form = new FormGroup({
    notes: new FormControl(''),
  
  });

  // Emit the event to notify the parent
  toggleEditMode() {
    this.toggleEditModeEvent.emit(); 
  }


  onSubmit(){

  }
}
