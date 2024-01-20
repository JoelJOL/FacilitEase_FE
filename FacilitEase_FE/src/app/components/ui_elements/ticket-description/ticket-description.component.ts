import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css']
})
export class TicketDescriptionComponent {
  subject:string=" I am not able to change payment settings.";
  description:string="This is description. This is description. This is description. This is description.This is description. "
 
}
