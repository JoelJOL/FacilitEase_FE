// sidebar.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private router: Router) {}
  navigateToPage(field: any) {
    // Implement your navigation logic here
    console.log(`Navigating to ${field.title}`);
    //this.router.navigate(['manager-subordinates']);
    // You can use Angular Router to navigate or any other logic
  }
}
