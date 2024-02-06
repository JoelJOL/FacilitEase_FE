import { Component, Input } from '@angular/core';
import { Card } from './card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css'],
})
export class EmployeeCardsComponent {
  constructor(private router: Router) {}
  @Input() cards: Card[] = [];
  selectedIndex: number | null = null;

  onCardClick(index: number) {
    const selectedCard = this.cards[index];

    switch (selectedCard.logo) {
      case 'ticket':
        this.router.navigate(['employee/form']);
        break;
      case 'knowledge-base':
        this.router.navigate(['employee/knowledgebase']);
        break;
      default:
        break;
    }
  }

  resetCardSelection() {
    this.selectedIndex = null;
  }
}
