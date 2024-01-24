import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';
// import { SidebarService } from 'src/app/features/service/dataService/sidebar.service';
// import { SidebarService } from './features/service/dataService/sidebar.service';

interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('sidebarState', [
      state(
        'collapsed',
        style({
          width: '60px', // Adjust the width as needed
        })
      ),
      state(
        'expanded',
        style({
          width: '250px', // Adjust the width as needed
        })
      ),
      transition('collapsed <=> expanded', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  @Input() fields: Field[] = [];
  @Input() subfields: string[] = [];
  selectedField: Field | null = null;
  @Output() clicked = new EventEmitter<any>();
  @Output() subfieldClicked = new EventEmitter<any>();

  @Input() onClickHandler: (() => void) | undefined;
  isSidebarCollapsed = false;
  constructor(private sidebarService: SidebarService) {}
  get sidebarState() {
    return this.isSidebarCollapsed ? 'collapsed' : 'expanded';
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onFieldClicked(field: any) {
    this.selectedField = field;
    this.clicked.emit(this.selectedField);
    // this.sidebarService.toggleCollapse();
    this.isSidebarCollapsed = false;
  }
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    this.subfieldClicked.emit(event);
  }
}
