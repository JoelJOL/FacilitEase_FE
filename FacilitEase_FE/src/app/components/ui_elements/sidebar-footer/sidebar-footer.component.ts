import { Component, Input } from '@angular/core';
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
  myTeam: Field = { logo: 'assets/sidebar-myTeam.png', title: 'My Team' };
  support: Field = { logo: 'assets/sidebar-support.png', title: 'Support' };
}
