import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SidebarLogoComponent } from './components/ui_elements/sidebar-logo/sidebar-logo.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { ButtonComponent } from './components/ui_elements/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfilepicDropdownComponent } from './components/layout/profilepic-dropdown/profilepic-dropdown.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SidebarLogoComponent } from './components/ui_elements/sidebar-logo/sidebar-logo.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarFieldComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarFooterComponent,
    ButtonComponent,
    ProfilepicDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,BrowserAnimationsModule,BsDropdownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
