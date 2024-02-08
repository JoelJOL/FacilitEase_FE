import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  search(): void {
    this.searchQueryChange.emit(this.searchQuery);
  }


}
