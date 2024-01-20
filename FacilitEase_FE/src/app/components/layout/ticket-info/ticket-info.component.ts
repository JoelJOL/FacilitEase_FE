import { Component } from '@angular/core';


@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent {
  ticketId: string = "#248572"; // Replace with actual data
  ticketPriority: string = "High";
}
