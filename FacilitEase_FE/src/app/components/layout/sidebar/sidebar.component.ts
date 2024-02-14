import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';

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
          width: '60px',
        })
      ),
      state(
        'expanded',
        style({
          width: '250px',
        })
      ),
      transition('collapsed <=> expanded', animate('0.4s ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  //get the contents in field and subfield as input
  @Input() fields: Field[] = [];
  @Input() subfields: string[] = [];
  selectedField: Field | null = null;
  //emit the field and subfield clicked
  @Output() clicked = new EventEmitter<any>();
  @Output() subfieldClicked = new EventEmitter<any>();

  @Input() onClickHandler: (() => void) | undefined;
  isSidebarCollapsed = false;
  ngOnInit(): void {
    if (this.fields.length > 0) {
      this.selectedField = this.fields[0];
      console.log(this.selectedField);
      this.clicked.emit(this.selectedField); // Emit event for the selected field
    }
  }
  constructor(private sidebarService: SidebarService) {}
  get sidebarState() {
    return this.isSidebarCollapsed ? 'collapsed' : 'expanded';
  }
  // onSidebarMouseEnter() {
  //   // On mouse enter, always expand the sidebar
  //   this.isSidebarCollapsed = false;
  //   this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  // }

  // onSidebarMouseLeave() {
  //   // On mouse leave, always collapse the sidebar
  //   this.isSidebarCollapsed = true;
  //   this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  // }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  }

  onFieldClicked(field: any) {
    this.selectedField = field;
    this.clicked.emit(this.selectedField);
    // this.sidebarService.toggleCollapse();
    this.isSidebarCollapsed = false;
    this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  }
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    this.subfieldClicked.emit(event);
  }
}
