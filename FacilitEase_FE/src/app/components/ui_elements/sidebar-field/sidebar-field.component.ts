import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-sidebar-field',
  templateUrl: './sidebar-field.component.html',
  styleUrls: ['./sidebar-field.component.css'],
})
export class SidebarFieldComponent {
  @Input()
  field!: Field;

  @Output() clicked = new EventEmitter();

  private static activeField: SidebarFieldComponent | null = null;
  active = false;

  onMouseEnter() {
    // Additional styles or actions on mouse enter (if needed)
  }

  onMouseLeave() {
    // Additional styles or actions on mouse leave (if needed)
  }

  onClick() {
    if (SidebarFieldComponent.activeField) {
      SidebarFieldComponent.activeField.active = false;
    }

    this.active = true;
    SidebarFieldComponent.activeField = this;

    this.clicked.emit(this.field); // Emit an event on click with the field data
    // Additional actions on click (if needed)
    console.log('Field clicked:', this.field.title);
  }
}
