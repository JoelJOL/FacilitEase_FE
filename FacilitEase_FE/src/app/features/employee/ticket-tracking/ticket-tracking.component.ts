import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-tracking',
  templateUrl: './ticket-tracking.component.html',
  styleUrls: ['./ticket-tracking.component.css']
})
export class TicketTrackingComponent {
  events:any[]=[];
  ngOnInit(){
    this.events = [
     {content:'Ordered', date:'15/02/2021 10:30', status:'R'},
     {content:'Processing', date:'15/02/2021 10:30', status:'R'},
     {content:'Shipped', date:'15/02/2021 10:30', status:'R'},
     {content:'Delivered', date:'15/02/2021 10:30', status:'R'}
    ]
  }
}
