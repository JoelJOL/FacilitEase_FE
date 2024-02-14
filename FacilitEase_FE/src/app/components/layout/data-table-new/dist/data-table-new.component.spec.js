"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var sort_up_down_component_1 = require("@app/components/ui_elements/sort-up-down/sort-up-down.component");
var core_1 = require("@angular/core"); // Import Component and Input decorators
var data_table_new_component_1 = require("./data-table-new.component");
var http_1 = require("@angular/common/http");
// Mock component for app-search-bar
var MockSearchBarComponent = /** @class */ (function () {
    function MockSearchBarComponent() {
    }
    MockSearchBarComponent = __decorate([
        core_1.Component({
            selector: 'app-search-bar',
            template: ''
        })
    ], MockSearchBarComponent);
    return MockSearchBarComponent;
}());
// Mock component for app-pagination
var MockPaginationComponent = /** @class */ (function () {
    function MockPaginationComponent() {
    }
    __decorate([
        core_1.Input()
    ], MockPaginationComponent.prototype, "totalItems");
    MockPaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            template: ''
        })
    ], MockPaginationComponent);
    return MockPaginationComponent;
}());
describe('DataTableNewComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                data_table_new_component_1.DataTableNewComponent,
                sort_up_down_component_1.SortUpDownComponent,
                MockSearchBarComponent,
                MockPaginationComponent // Include the mock pagination component here
            ],
            imports: [http_1.HttpClientModule]
        });
        fixture = testing_1.TestBed.createComponent(data_table_new_component_1.DataTableNewComponent);
        component = fixture.componentInstance;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should render table headers correctly', function () {
        component.headers = ['ID', 'Name', 'Age'];
        fixture.detectChanges();
        var headerElements = fixture.nativeElement.querySelectorAll('th');
        expect(headerElements.length).toEqual(3); // Assuming there are 3 headers
        expect(headerElements[0].textContent).toContain('ID');
        expect(headerElements[1].textContent).toContain('Name');
        expect(headerElements[2].textContent).toContain('Age');
    });
    // Add more test cases for other functionalities as needed
});
