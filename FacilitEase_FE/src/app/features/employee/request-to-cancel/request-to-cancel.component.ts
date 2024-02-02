import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '@app/features/service/httpService/agent.service';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';

@Component({
  selector: 'app-request-to-cancel',
  templateUrl: './request-to-cancel.component.html',
  styleUrls: ['./request-to-cancel.component.css'],
})
export class RequestToCancelComponent {
  customHeaderText = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails: any = [];

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router,
    private dropDownService: DropDownService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['id']);
      console.log('This is the id', this.ticketId);
    });

    this.agentService.getData(this.ticketId).subscribe((data) => {
      console.log('API Response:', data);
      this.ticketDetails = data[0];
      console.log('Ticket Details:', this.ticketDetails);
    });
  }

  onCancelRequest() {
    this.http
      .patch('https://localhost:7049/api/Employee/cancel-request/2', {})
      .subscribe(
        (response) => {
          console.log('Cancel request successful', response);
          alert('Cancel request successful');
        },
        (error) => {
          console.error('Error cancelling request', error);
        }
      );
  }
}
