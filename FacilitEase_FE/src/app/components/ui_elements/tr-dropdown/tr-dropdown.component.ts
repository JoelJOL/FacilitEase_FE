import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tr-dropdown',
  templateUrl: './tr-dropdown.component.html',
  styleUrls: ['./tr-dropdown.component.css'],
})
export class TrDropdownComponent {
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() displayKey: string = '';
  @Input() valueProperty: string = '';
  @Output() onItemSelected = new EventEmitter<number>();

  onSelectionChange(event: any) {
    const selectedId = event.target.value;
    this.onItemSelected.emit(selectedId);
  }
}
