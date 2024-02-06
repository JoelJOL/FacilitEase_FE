import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate ,state} from '@angular/animations';

@Component({
  selector: 'app-tracking-timeline',
  templateUrl: './tracking-timeline.component.html',
  styleUrls: ['./tracking-timeline.component.css'],
  animations: [
    trigger('staggeredAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-50px)'
        }),
        animate('500ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class TrackingTimelineComponent implements OnInit {
  @Input() value: any[] = [];
  isEven(index: number): boolean {
    const result = index % 2 === 0;
    console.log(`Index ${index} is even: ${result}`);
    return result;
  }
  ngOnInit() {
    console.log("Hi");
    console.log('Received value:', this.value);
  } 
}