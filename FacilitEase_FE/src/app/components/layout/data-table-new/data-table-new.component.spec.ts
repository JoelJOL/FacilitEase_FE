import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortUpDownComponent } from '@app/components/ui_elements/sort-up-down/sort-up-down.component';
import { Component, Input } from '@angular/core'; // Import Component and Input decorators
import { DataTableNewComponent } from './data-table-new.component';
import { HttpClientModule } from '@angular/common/http';

// Mock component for app-search-bar
@Component({
  selector: 'app-search-bar',
  template: '',
})
class MockSearchBarComponent {}

// Mock component for app-pagination
@Component({
  selector: 'app-pagination',
  template: '',
})
class MockPaginationComponent {
  @Input() totalItems: number | undefined; // Define the totalItems input property
}

describe('DataTableNewComponent', () => {
  let component: DataTableNewComponent;
  let fixture: ComponentFixture<DataTableNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableNewComponent,
        SortUpDownComponent,
        MockSearchBarComponent,
        MockPaginationComponent,
      ],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(DataTableNewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render table headers correctly', () => {
    component.headers = ['ID', 'Name', 'Age'];
    fixture.detectChanges();
    const headerElements = fixture.nativeElement.querySelectorAll('th');
    expect(headerElements.length).toEqual(3); // Assuming there are 3 headers
    expect(headerElements[0].textContent).toContain('ID');
    expect(headerElements[1].textContent).toContain('Name');
    expect(headerElements[2].textContent).toContain('Age');
  });
});
