import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketNotesComponent } from './components/layout/ticket-notes/ticket-notes.component';
import { TicketAttachmentsComponent } from './components/layout/ticket-attachments/ticket-attachments.component';
import { TicketNotesAttachmentsComponent } from './components/layout/ticket-notes-attachments/ticket-notes-attachments.component';
import { PersonCardComponent } from './components/ui_elements/person-card/person-card.component';
import { TicketRaisedAssignedComponent } from './components/layout/ticket-raised-assigned/ticket-raised-assigned.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketNotesComponent,
    TicketAttachmentsComponent,
    TicketNotesAttachmentsComponent,
    PersonCardComponent,
    TicketRaisedAssignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
