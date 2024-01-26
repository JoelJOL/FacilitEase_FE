import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modal.service';
import { AgentService } from '@app/features/service/httpService/agent.service';

@Component({
  selector: 'app-l2admin-ticket-view',
  templateUrl: './l2admin-ticket-view.component.html',
  styleUrls: ['./l2admin-ticket-view.component.css'],
})
export class L2adminTicketViewComponent {
  customHeaderText = 'Supported Attachments';
  ticketId: number = 0;
  ticketDetails: any = [];
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private myModalService: ModalService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ticketId = Number(params['id']);
      console.log(this.ticketId);
    });
    this.agentService.getData(this.ticketId).subscribe((data) => {
      this.ticketDetails = data[0];
      console.log(data);
    });
  }
  openModal(): void {
    this.myModalService.openModal();
  }
}
