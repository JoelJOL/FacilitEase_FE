import { Component, Input } from '@angular/core';
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

  onClick() {
    // Add logic to handle the click event (e.g., show corresponding content)
    console.log('Field clicked:', this.field.title);
  }
}
