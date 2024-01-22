import { Component } from '@angular/core';
import { DropDrownService } from 'src/app/features/service/httpService/drop-drown.service';

@Component({
  selector: 'app-tr-form',
  templateUrl: './tr-form.component.html',
  styleUrls: ['./tr-form.component.css']
})
export class TrFormComponent {
  priorities: any[] = [];
  categories: any[] = [];
  departments: any[] = [];

  constructor(private apiService: DropDrownService) {}

  // ngOnInit(): void {
  //   this.apiService.getPriorities().subscribe((data) => (this.priorities = data));
  //   this.apiService.getCategories().subscribe((data) => (this.categories = data));
  //   this.apiService.getDepartments().subscribe((data) => (this.departments = data));
  // }
  ngOnInit(): void {
    this.apiService.getPriorities().subscribe((data) => {
      console.log('Priorities:', data);
      this.priorities = data;
    });
  
    this.apiService.getCategories().subscribe((data) => {
      console.log('Categories:', data);
      this.categories = data;
    });
  
    this.apiService.getDepartments().subscribe((data) => {
      console.log('Departments:', data);
      this.departments = data;
    });
  }
  
}
