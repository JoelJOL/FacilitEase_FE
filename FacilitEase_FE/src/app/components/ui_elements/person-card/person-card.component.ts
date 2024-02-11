import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent {
  @Input() personName: string = '';
  @Input() role: number = 1;
}
