import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css'],
})
export class TicketDescriptionComponent {
  ticket: any = [];
  @Input() ticketDetails: any;
  ngOnChanges() {
    console.log(this.ticketDetails);
  }
  constructor() {}
}
