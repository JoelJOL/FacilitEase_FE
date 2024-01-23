import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfilepicDropdownComponent } from './components/layout/profilepic-dropdown/profilepic-dropdown.component';
import { SidebarSubfieldComponent } from './components/ui_elements/sidebar-subfield/sidebar-subfield.component';
import { ManagerSubordinatesComponent } from './features/manager/manager-subordinates/manager-subordinates.component';
import { ManagerComponent } from './features/manager/manager/manager.component';
import { TrDropdownComponent } from './components/ui_elements/assign-dropdown/assign-dropdown.component';
import { L2AdminComponent } from './l2admin/l2admin.component';
import { FormsModule } from '@angular/forms';
import { UnassignedTicketsComponent } from './unassigned-tickets/unassigned-tickets.component';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';
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
import { ManagerViewEmployeeTicketsComponent } from './features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component';
import { DataTableComponent } from './components/layout/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AgentTicketViewComponent } from './features/l3admin/agent-ticket-view/agent-ticket-view.component';
import { TitleSubComponent } from './components/ui_elements/title-sub/title-sub.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
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
    ManagerViewEmployeeTicketsComponent,
    DataTableComponent
    AgentTicketViewComponent,
    TitleSubComponent,
    ModalComponent,
    AgentTicketsViewComponent
    SidebarSubfieldComponent,
    ManagerSubordinatesComponent,
    ManagerComponent,
    TrDropdownComponent,
    L2AdminComponent,
    UnassignedTicketsComponent,
    AssignedTicketsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    CommonModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
