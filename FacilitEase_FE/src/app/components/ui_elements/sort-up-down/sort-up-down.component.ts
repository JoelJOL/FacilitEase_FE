import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sort-up-down',
  templateUrl: './sort-up-down.component.html',
  styleUrls: ['./sort-up-down.component.css']
})
export class SortUpDownComponent {
  @Output() sortAscending = new EventEmitter<void>();
  @Output() sortDescending = new EventEmitter<void>()
  sortup(): void {
    this.sortAscending.emit();
  }

  sortdown(): void {
    this.sortDescending.emit();
  }
}
