import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SidebarSubfieldComponent } from '../sidebar-subfield/sidebar-subfield.component';

interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}

@Component({
  selector: 'app-sidebar-field',
  templateUrl: './sidebar-field.component.html',
  styleUrls: ['./sidebar-field.component.css'],
})
export class SidebarFieldComponent {
  @Input() field!: Field;
  @Input() onClickHandler: (() => void | undefined) | undefined; // Dynamic onClick handler

  @Output() clicked = new EventEmitter<any>();

  @ViewChild(SidebarSubfieldComponent)
  subfieldComponent!: SidebarSubfieldComponent;

  // Adjusted constructor to handle strict null checks

  private static activeField: SidebarFieldComponent | null = null;
  active = false;

  onMouseEnter() {
    // Additional styles or actions on mouse enter (if needed)
  }

  onMouseLeave() {
    // Additional styles or actions on mouse leave (if needed)
  }

  onFieldClicked() {
    if (SidebarFieldComponent.activeField) {
      SidebarFieldComponent.activeField.active = false;
    }

    this.active = true;
    SidebarFieldComponent.activeField = this;

    this.clicked.emit(this.field); // Emit an event on click with the field data
    // Additional actions on click (if needed)

    console.log('Field clicked:', this.field.title);
    this.subfieldComponent.deactivateSubfield();
  }
}
