import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-logo',
  templateUrl: './sidebar-logo.component.html',
  styleUrls: ['./sidebar-logo.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)), // You can adjust the duration (300ms in this example)
    ]),
  ],
})
export class SidebarLogoComponent {
  logoSrc: string = 'assets/Facilit Ease.svg';
  logoIcon: string = 'assets/FacilitEase-logo-removebg-preview.png';
  @Input() collapsed: boolean = false; // Assuming 'collapsed' is an input propertyS
}
