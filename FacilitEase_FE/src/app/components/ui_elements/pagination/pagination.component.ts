import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems !: number; // Total number of items
  @Input() itemsPerPage: number = 10; // Number of items per page
  @Input() currentPage: number = 1; // Current page
  @Output() pageChange = new EventEmitter<number>(); // Event emitter for page change

  visibleNumbers: number[] = [];

  ngOnInit(): void {
    this.currentPage = 1;
    this.updateVisibleNumbers();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('totalItems' in changes) {
      this.updateVisibleNumbers();
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage-1);
      this.updateVisibleNumbers();
    }
  }

  next(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage-1);
      this.updateVisibleNumbers();
    }
  }

  selectNumber(number: number): void {
    this.currentPage = number - 1;
    this.pageChange.emit(this.currentPage);
    this.currentPage++;
    this.updateVisibleNumbers();
  }
  

  updateVisibleNumbers(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.visibleNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
}
