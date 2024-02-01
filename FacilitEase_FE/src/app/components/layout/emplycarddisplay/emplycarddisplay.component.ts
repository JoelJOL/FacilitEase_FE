import { Component } from '@angular/core';

import { Card } from '../employee-cards/card.model';
@Component({
  selector: 'app-emplycarddisplay',
  templateUrl: './emplycarddisplay.component.html',
  styleUrls: ['./emplycarddisplay.component.css'],
})
export class EmplycarddisplayComponent {
  cards: Card[] = [
    {
      title: 'Raise a Ticket',
      content: 'Click here to raise a ticket.',
      logo: 'ticket',
    },
    {
      title: 'Knowledge Base',
      content: 'Click here to access the knowledge base.',
      logo: 'knowledge-base',
    },
    // Add more cards as needed
  ];
}
