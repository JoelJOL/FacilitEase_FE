import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentHeadDataTableComponent } from './department-head-data-table.component';
import { DepartmentHeadService } from '@app/features/service/httpService/Department-head/department-head.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { DataTableNewComponent } from '@app/components/layout/data-table-new/data-table-new.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '@app/components/ui_elements/search-bar/search-bar.component';
import { SortUpDownComponent } from '@app/components/ui_elements/sort-up-down/sort-up-down.component';
import { PaginationComponent } from '@app/components/ui_elements/pagination/pagination.component';
import { ButtonComponent } from '@app/components/ui_elements/button/button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DepartmentHeadDataTableComponent', () => {
  let component: DepartmentHeadDataTableComponent;
  let fixture: ComponentFixture<DepartmentHeadDataTableComponent>;
  let departmentHeadServiceMock: jasmine.SpyObj<DepartmentHeadService>;

  beforeEach(() => {
    departmentHeadServiceMock = jasmine.createSpyObj('DepartmentHeadService', [
      'getApiLink',
    ]);

    TestBed.configureTestingModule({
      declarations: [
        DepartmentHeadDataTableComponent,
        DataTableNewComponent,
        SearchBarComponent,
        SortUpDownComponent,
        PaginationComponent,
        ButtonComponent,
      ],
      providers: [
        { provide: DepartmentHeadService, useValue: departmentHeadServiceMock },
      ],
      imports: [RouterTestingModule, HttpClientModule], // Import RouterTestingModule for testing navigation
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(DepartmentHeadDataTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set apiLink from DepartmentHeadService on ngOnInit', () => {
    // Arrange
    const testApiLink = 'test-api-link';
    departmentHeadServiceMock.getApiLink.and.returnValue(testApiLink);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.apiLink).toEqual(testApiLink);
    expect(departmentHeadServiceMock.getApiLink).toHaveBeenCalled();
  });

  it('should navigate to department-head-tc-detail when onRowClicked is called', () => {
    // Arrange
    const routerNavigateSpy = spyOn(TestBed.inject(Router), 'navigate');
    const testId = 123;

    // Act
    component.onRowClicked(testId);

    // Assert
    expect(routerNavigateSpy).toHaveBeenCalledWith([
      'departmenthead/department-head-tc-detail',
      testId,
    ]);
  });

  it('should render headers in the template', () => {
    // Act
    fixture.detectChanges();

    // Assert
    const headerElements = fixture.debugElement.queryAll(By.css('.heading'));

    expect(headerElements.length).toBe(1);
    expect(headerElements[0].nativeElement.textContent.trim()).toBe(
      'Tickets Waiting For Approval'
    );
  });
});
