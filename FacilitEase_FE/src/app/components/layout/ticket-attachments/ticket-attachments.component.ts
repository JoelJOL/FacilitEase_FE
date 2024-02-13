import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { TicketDetails } from '@app/ticket-details'; 

@Component({
  selector: 'app-ticket-attachments',
  templateUrl: './ticket-attachments.component.html',
  styleUrls: ['./ticket-attachments.component.css'],
})
export class TicketAttachmentsComponent {
  @Input() headerText = 'Attachments';
  @Input() ticketDetails:any;
  uploadForm!: FormGroup;

  ticket: any = [];
  constructor(private agentService: AgentService) {

    this.uploadForm = new FormGroup({
      file: new FormControl(null),
    });
  }
  document: string = '';

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({
        file: file,
      });
    }
  }

}
