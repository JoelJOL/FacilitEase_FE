import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { HighlightPipe } from '@app/features/service/highlightPipe/highlight.pipe';
import { ReportService } from '@app/features/service/httpService/reportService/report.service';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';

pipes: [HighlightPipe];

interface suggestion {
  empId: number;
  employeeFirstName: string;
  employeeLastName: string;
  jobTitle: string;
  username: string;
}

@Component({
  selector: 'app-dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.css'],
})
export class DynamicSearchComponent {
  constructor(
    private searchService: SearchService,
    private changes: ChangeDetectorRef
  ) {}
  @Output() EmployeeId = new EventEmitter<number>();
  query: string = '';
  suggestions: suggestion[] = [];
  selectSuggestion(suggestion: suggestion) {
    console.log('clicked');
    this.suggestions = [];
    this.query =
      suggestion.employeeFirstName + ' ' + suggestion.employeeLastName;
    this.EmployeeId.emit(suggestion.empId);
  }
  handleQueryChange(input: string) {
    if (input === '') {
      console.log(input);
      this.suggestions = [];
    }
  }

  getSuggestions() {
    if (this.query != '') {
      this.searchService.getSuggestions(this.query).subscribe(
        (data: suggestion[]) => {
          this.suggestions = [];
          data.forEach((suggestionItem: suggestion) => {
            this.suggestions.push({ ...suggestionItem });
          });
          console.log(data);
          console.log(this.suggestions);
          this.changes.detectChanges();
        },
        (error: any) => {
          if (error.status === 404 && error.statusText === 'OK') {
            this.suggestions = [];
            console.error('Suggestions not found (404 error).');
          } else {
            console.error('Error fetching suggestions:', error);
          }
        }
      );
    }
  }
  closeDropdown() {
    this.suggestions = [];
  }
}
