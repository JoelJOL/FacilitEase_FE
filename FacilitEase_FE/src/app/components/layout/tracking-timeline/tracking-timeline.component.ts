import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tracking-timeline',
  templateUrl: './tracking-timeline.component.html',
  styleUrls: ['./tracking-timeline.component.css']
})
export class TrackingTimelineComponent {
  @Input() value:any[]=[];
}
