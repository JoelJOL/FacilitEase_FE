import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tracking-modal',
  templateUrl: './tracking-modal.component.html',
  styleUrls: ['./tracking-modal.component.css']
})
export class TrackingModalComponent {
  @Input() ticketDetails: any;
  @ViewChild('modalBody') modalBody!: ElementRef;
  constructor(public modalRef: BsModalRef){}
  close() {
    this.modalRef.hide();
  }
  ngAfterViewInit() {
    if (this.ticketDetails) {
      const id = this.ticketDetails.id;
      console.log('Ticket ID:', id);
    }
  }
}
