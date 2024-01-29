import { Component, Input } from '@angular/core';
import { Card } from './card.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css'],
})
export class EmployeeCardsComponent {
  @Input() cards: Card[] = [];
  selectedIndex: number | null = null;

  onCardClick(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = index;
    }
  }

  resetCardSelection() {
    this.selectedIndex = null;
  }
}
