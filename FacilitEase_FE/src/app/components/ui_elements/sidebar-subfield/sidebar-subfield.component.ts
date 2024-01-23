import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-sidebar-subfield',
  templateUrl: './sidebar-subfield.component.html',
  styleUrls: ['./sidebar-subfield.component.css'],
})
export class SidebarSubfieldComponent implements OnChanges {
  @Input() showSubfield = false;
  @Input() subfields: string[] = [];
  @Output() subfieldClick = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showSubfield'] && changes['showSubfield'].currentValue) {
      console.log('Subfields:', this.subfields);
    }
  }

  activeSubfield: string | null = null; // Track the active subfield

  onClick(subfield: string) {
    if (this.activeSubfield === subfield) {
      this.activeSubfield = null; // Clicking on the active subfield again deactivates it
    } else {
      this.activeSubfield = subfield; // Activate the new subfield
    }
    this.subfieldClick.emit(subfield);
  }

  isActive(subfield: string): boolean {
    return this.activeSubfield === subfield;
  }
  deactivateSubfield() {
    this.activeSubfield = null;
  }
}
