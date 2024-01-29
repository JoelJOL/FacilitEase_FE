import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() filterValues: { [key: string]: string[] } = {};
  openModal() {
    console.log('Modal opened!');
  }
  onFilterValueClick(filter: string, value: string) {
    // Implement the logic to handle the click event
    console.log(`Filter "${filter}" value "${value}" clicked`);
  }

  // Method to check if a filter value is selected (you may need to implement this logic based on your requirements)
  isSelected(filter: string, value: string): boolean {
    // Implement the logic to determine if the filter value is selected
    // Return true or false based on your application's requirements
    return false;
  }
}
