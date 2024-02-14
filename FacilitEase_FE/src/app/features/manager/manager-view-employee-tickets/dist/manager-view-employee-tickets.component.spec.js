"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var manager_view_employee_tickets_component_1 = require("./manager-view-employee-tickets.component");
var master_service_1 = require("../../service/dataService/masterService/master.service");
var router_1 = require("@angular/router");
// Import HttpClientModule
var http_1 = require("@angular/common/http");
var data_table_new_component_1 = require("@app/components/layout/data-table-new/data-table-new.component");
var sort_up_down_component_1 = require("@app/components/ui_elements/sort-up-down/sort-up-down.component");
var search_bar_component_1 = require("@app/components/ui_elements/search-bar/search-bar.component");
var pagination_component_1 = require("@app/components/ui_elements/pagination/pagination.component");
var button_component_1 = require("@app/components/ui_elements/button/button.component"); // Import ButtonComponent
var core_1 = require("@angular/core");
describe('ManagerViewEmployeeTicketsComponent', function () {
    var component;
    var fixture;
    var mockMasterService;
    var router;
    beforeEach(function () {
        mockMasterService = jasmine.createSpyObj('MasterService', ['getApiLink']);
        testing_1.TestBed.configureTestingModule({
            declarations: [
                manager_view_employee_tickets_component_1.ManagerViewEmployeeTicketsComponent,
                data_table_new_component_1.DataTableNewComponent,
                sort_up_down_component_1.SortUpDownComponent,
                search_bar_component_1.SearchBarComponent,
                pagination_component_1.PaginationComponent,
                button_component_1.ButtonComponent // Include ButtonComponent
            ],
            imports: [testing_2.RouterTestingModule, http_1.HttpClientModule],
            providers: [{ provide: master_service_1.MasterService, useValue: mockMasterService }],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }).compileComponents();
        router = testing_1.TestBed.inject(router_1.Router);
    });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(manager_view_employee_tickets_component_1.ManagerViewEmployeeTicketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should set apiLink correctly from MasterService', function () {
        var mockApiLink = 'http://example.com/api';
        mockMasterService.getApiLink.and.returnValue(mockApiLink);
        component.ngOnInit();
        expect(component.apiLink).toEqual(mockApiLink);
    });
    it('should navigate to ticket details on row click', function () {
        var ticketId = 123;
        spyOn(router, 'navigate').and.stub();
        component.onRowClicked(ticketId);
        expect(router.navigate).toHaveBeenCalledWith(['manager/manager-view-ticket-simple', ticketId]);
    });
});
