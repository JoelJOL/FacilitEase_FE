import { Component, EventEmitter, Input, Output } from '@angular/core';
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
})
export class SidebarComponent {
  @Input() fields: Field[] = [];
  @Input() subfields: string[] = [];
  selectedField: Field | null = null;
  @Output() clicked = new EventEmitter<any>();

  @Input() onClickHandler: (() => void) | undefined;

  onFieldClicked(field: any) {
    this.selectedField = field;
    this.clicked.emit(this.selectedField);
    // Handle the click event for the individual field here
    // console.log(`Field clicked: ${field.title}`);
    // You can perform navigation or any other logic here
  }
  // onFieldClicked(field: Field) {
  //   this.selectedField = field;
  // }
}
