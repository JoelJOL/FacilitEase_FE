import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Output() action = new EventEmitter<string>();

  onClick(): void {
    const ticketId = prompt('Enter Ticket ID:');
    if (ticketId) {
      this.action.emit();
    }
  }
}
