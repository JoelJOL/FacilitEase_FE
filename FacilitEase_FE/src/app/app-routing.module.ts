import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
import { AgentTicketViewComponent } from './features/l3admin/agent-ticket-view/agent-ticket-view.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { ManagerSubordinatesComponent } from './features/manager/manager-subordinates/manager-subordinates.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ManagerComponent } from './features/manager/manager/manager.component';
import { UnassignedTicketsComponent } from './unassigned-tickets/unassigned-tickets.component';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';

const routes: Routes = [
  { path: 'xxx', component: SidebarComponent }, // Default route to Home component
  { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'unassigned-tickets', component: UnassignedTicketsComponent },
  { path: 'assigned-tickets', component: AssignedTicketsComponent },
   {path:'xxx',component:AgentTicketsViewComponent},
   {path:'agentticket',component:AgentTicketViewComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
