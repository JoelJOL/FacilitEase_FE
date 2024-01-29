import { Component } from '@angular/core';

interface AssignBar {
  title: string;
  titleicon: string;
  inner: string[];
}

@Component({
  selector: 'app-l1-data-entry',
  templateUrl: './l1-data-entry.component.html',
  styleUrls: ['./l1-data-entry.component.css'],
})
export class L1DataEntryComponent {
  showDiv = false;
  displaybars: AssignBar[] = [
    {
      title: 'Employee',
      titleicon: 'assets/plus_sign.png',
      inner: ['Add Employee', 'Edit Employee', 'Remove Employee'],
    },
    {
      title: 'Department',
      titleicon: 'assets/plus_sign.png',
      inner: ['Add Department'],
    },
    {
      title: 'Project',
      titleicon: 'assets/plus_sign.png',
      inner: ['Add Project', 'Edit Project', 'Remove Project'],
    },
    {
      title: 'Asset',
      titleicon: 'assets/plus_sign.png',
      inner: ['Add Asset', 'Edit Asset', 'Remove Asset'],
    },
  ];
  showArray: boolean[] = [];
  titleicon: string = '';
  OpenOptions(index: number) {
    this.showArray[index] = !this.showArray[index];
    for (let i = 0; i < this.showArray.length; i++) {
      if (i !== index) {
        this.showArray[i] = false;
        this.displaybars[i].titleicon = 'assets/plus_sign.png';
      }
    }
    this.displaybars[index].titleicon = 'assets/minus.png';
  }
}
