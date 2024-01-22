import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tr-description',
  templateUrl: './tr-description.component.html',
  styleUrls: ['./tr-description.component.css']
})
export class TrDescriptionComponent {
  @Output() descriptionChange = new EventEmitter<string>();

  onDescriptionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.descriptionChange.emit(value);
  }
}
