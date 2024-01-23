import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
import { AgentTicketViewComponent } from './features/l3admin/agent-ticket-view/agent-ticket-view.component';

const routes: Routes = [
   {path:'',component:AgentTicketsViewComponent},
   {path:'agentticket',component:AgentTicketViewComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
