import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';

@Component({
  selector: 'app-ticket-na-simple',
  templateUrl: './ticket-na-simple.component.html',
  styleUrls: ['./ticket-na-simple.component.css'],
})
export class TicketNaSimpleComponent {
  lastUpdate: string = '';
  @Input() ticketId: number | undefined;
  @Input() reload: boolean = false;
  constructor(private agentService: AgentService) {}
  commentExists: boolean = false;

  ngOnInit(): void {
    this.getCommentText();
    this.fetchTimeSinceLastUpdate();
  }

  fetchTimeSinceLastUpdate(): void {
    // Subscribe to the getTimeSinceLastUpdate method
    this.agentService.getTimeSinceLastUpdate(this.ticketId).subscribe(
      (response: string) => {
        console.log('Time since last update:', response);
        this.lastUpdate = response;
      },
      (error) => {
        console.error('Error fetching time since last update:', error);
        // Handle error here
      }
    );
  }

  getCommentText() {
    this.agentService.getCommentText(this.ticketId).subscribe(
      (commentText: string) => {
        console.log('Comment Text:', commentText);
        this.form.patchValue({
          notes: commentText,
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

  //Initialising the form control notes
  form = new FormGroup({
    notes: new FormControl(''),
  });

  getNotes(): string {
    const notesControl = this.form ? this.form.get('notes') : null;
    return notesControl ? (notesControl.value as string) : '';
  }
}
