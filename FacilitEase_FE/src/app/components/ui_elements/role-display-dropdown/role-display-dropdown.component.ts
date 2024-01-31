import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';
import { OutsideClickDirective } from '@app/features/service/directive/outside-click.directive';

@Component({
  selector: 'app-role-display-dropdown',
  templateUrl: './role-display-dropdown.component.html',
  styleUrls: ['./role-display-dropdown.component.css'],
})
export class RoleDisplayDropdownComponent {
  constructor(private searchService: SearchService) {}
  showDropdown: boolean = false;
  selectedOption: string = '';
  options: string[] = [];
  @Input()
  apiLink: string = '';
  @Output()
  chooseOption: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}

  toggleDropdown() {
    this.showDropdown = true;
    this.searchService.GetOptions(this.apiLink).subscribe((data) => {
      this.options = data;
    });
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.chooseOption.emit(option);
    this.showDropdown = false;
  }
  closeDropdown() {
    this.showDropdown = false;
  }
}
