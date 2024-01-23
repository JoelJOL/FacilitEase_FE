import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketNotesComponent } from './components/layout/ticket-notes/ticket-notes.component';
import { TicketAttachmentsComponent } from './components/layout/ticket-attachments/ticket-attachments.component';
import { TicketNotesAttachmentsComponent } from './components/layout/ticket-notes-attachments/ticket-notes-attachments.component';
import { PersonCardComponent } from './components/ui_elements/person-card/person-card.component';
import { TicketRaisedAssignedComponent } from './components/layout/ticket-raised-assigned/ticket-raised-assigned.component';
import { CardUpperComponent } from './components/layout/card-upper/card-upper.component';
import { TicketDescriptionComponent } from './components/ui_elements/ticket-description/ticket-description.component';
import { TicketHeaderComponent } from './components/ui_elements/ticket-header/ticket-header.component';
import { TicketInfoComponent } from './components/layout/ticket-info/ticket-info.component';
import { ButtonComponent } from './components/ui_elements/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfilepicDropdownComponent } from './components/layout/profilepic-dropdown/profilepic-dropdown.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SidebarLogoComponent } from './components/ui_elements/sidebar-logo/sidebar-logo.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { HeaderUserRoleDropdownComponent } from './components/ui_elements/header-user-role-dropdown/header-user-role-dropdown.component';
import { RaiseTicketTitleComponent } from './components/ui_elements/raise-ticket-title/raise-ticket-title.component';
import { TrDropdownComponent } from './components/ui_elements/tr-dropdown/tr-dropdown.component';
import { TrFormComponent } from './components/layout/tr-form/tr-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TrSubjectComponent } from './components/ui_elements/tr-subject/tr-subject.component';
import { TrDescriptionComponent } from './components/ui_elements/tr-description/tr-description.component';
import { TrAttachmentsComponent } from './components/ui_elements/tr-attachments/tr-attachments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardUpperComponent,
    TicketDescriptionComponent,
    TicketHeaderComponent,
    TicketInfoComponent,
    SidebarFieldComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarFooterComponent,
    ButtonComponent,
    ProfilepicDropdownComponent,
    TicketNotesComponent,
    TicketAttachmentsComponent,
    TicketNotesAttachmentsComponent,
    PersonCardComponent,
    TicketRaisedAssignedComponent,
    HeaderUserRoleDropdownComponent,
    RaiseTicketTitleComponent,
    TrDropdownComponent,
    TrFormComponent,
    TrSubjectComponent,
    TrDescriptionComponent,
    TrAttachmentsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
