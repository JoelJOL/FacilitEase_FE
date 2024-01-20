import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-logo',
  templateUrl: './sidebar-logo.component.html',
  styleUrls: ['./sidebar-logo.component.css'],
})
export class SidebarLogoComponent {
  logoSrc: string = 'assets/logo.png';
}
