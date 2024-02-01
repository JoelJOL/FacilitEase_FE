import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SidebarSubfieldComponent } from '../sidebar-subfield/sidebar-subfield.component';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';

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
  @Input() subfield!: string;
  @Input() collapsed: boolean = false; // Assuming 'collapsed' is an input property
  @Output() clicked = new EventEmitter<any>();
  @Output() subfieldClicked = new EventEmitter<any>();
  @ViewChild(SidebarSubfieldComponent)
  subfieldComponent!: SidebarSubfieldComponent;
  constructor(private sidebarService: SidebarService) {}
  // Adjusted constructor to handle strict null checks

  private static activeField: SidebarFieldComponent | null = null;
  active = false;
  isSidebarCollapsed = false;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  }

  onFieldClicked() {
    if (SidebarFieldComponent.activeField) {
      SidebarFieldComponent.activeField.active = false;
    }
    this.active = true;
    SidebarFieldComponent.activeField = this;

    this.clicked.emit(this.field); // Eit an event on click with the field data
    // Additional actions on click (if needed)

    console.log('Field clicked:', this.field.title);
    this.subfieldComponent.deactivateSubfield();
  }
  onSubfieldClicked(subfield: any) {
    this.subfieldClicked.emit({ field: this.field, subfield });
  }
}
