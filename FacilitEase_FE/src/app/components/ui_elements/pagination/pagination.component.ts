import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  highlightedNumber: number = 1; // Initial highlighted number
  visibleNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateVisibleNumbers();
  }

  previous(): void {
    if (this.highlightedNumber > 1) {
      this.highlightedNumber--;
      this.updateVisibleNumbers();
    }
  }

  next(): void {
    if (this.highlightedNumber < this.numbers.length) {
      this.highlightedNumber++;
      this.updateVisibleNumbers();
    }
  }

  selectNumber(number: number): void {
    this.highlightedNumber = number;
    this.updateVisibleNumbers();
  }

  updateVisibleNumbers(): void {
    const index = this.numbers.indexOf(this.highlightedNumber);
    let start = Math.max(0, index - 2);
    let end = Math.min(this.numbers.length, start + 5);

    // Ensure that there are always 5 visible numbers
    if (end - start < 5) {
      start = Math.max(0, end - 5);
    }

    this.visibleNumbers = this.numbers.slice(start, end);
  }
}
