import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManagerViewEmployeeTicketsComponent } from './manager-view-employee-tickets.component';
import { MasterService } from '../../service/dataService/masterService/master.service';
import { Router } from '@angular/router';

// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { DataTableNewComponent } from '@app/components/layout/data-table-new/data-table-new.component';
import { SortUpDownComponent } from '@app/components/ui_elements/sort-up-down/sort-up-down.component';
import { SearchBarComponent } from '@app/components/ui_elements/search-bar/search-bar.component';
import { PaginationComponent } from '@app/components/ui_elements/pagination/pagination.component';
import { ButtonComponent } from '@app/components/ui_elements/button/button.component'; // Import ButtonComponent
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ManagerViewEmployeeTicketsComponent', () => {
  let component: ManagerViewEmployeeTicketsComponent;
  let fixture: ComponentFixture<ManagerViewEmployeeTicketsComponent>;
  let mockMasterService: jasmine.SpyObj<MasterService>;
  let router: Router;

  beforeEach(() => {
    mockMasterService = jasmine.createSpyObj('MasterService', ['getApiLink']);
    TestBed.configureTestingModule({
      declarations: [
        ManagerViewEmployeeTicketsComponent,
        DataTableNewComponent,
        SortUpDownComponent,
        SearchBarComponent,
        PaginationComponent,
        ButtonComponent // Include ButtonComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: MasterService, useValue: mockMasterService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewEmployeeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set apiLink correctly from MasterService', () => {
    const mockApiLink = 'http://example.com/api';
    mockMasterService.getApiLink.and.returnValue(mockApiLink);

    component.ngOnInit();

    expect(component.apiLink).toEqual(mockApiLink);
  });

  it('should navigate to ticket details on row click', () => {
    const ticketId = 123;
    spyOn(router, 'navigate').and.stub();

    component.onRowClicked(ticketId);

    expect(router.navigate).toHaveBeenCalledWith(['manager/manager-view-ticket-simple', ticketId]);
  });
});
