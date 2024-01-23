import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { ManagerSubordinatesComponent } from './features/manager/manager-subordinates/manager-subordinates.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ManagerComponent } from './features/manager/manager/manager.component';

const routes: Routes = [
  { path: '', component: SidebarComponent }, // Default route to Home component
  { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  { path: 'manager', component: ManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
