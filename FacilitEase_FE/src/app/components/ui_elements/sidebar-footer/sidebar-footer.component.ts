import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.css'],
})
export class SidebarFooterComponent {
  constructor(private router: Router) {}
  myTeam: Field = { logo: 'assets/sidebar-myTeam.png', title: 'My Team' };
  support: Field = { logo: 'assets/sidebar-support.png', title: 'Support' };
  @Output() fieldClicked = new EventEmitter<any>();

  onFieldClicked(clickedField: any) {
    this.fieldClicked.emit(clickedField);
  }
}
