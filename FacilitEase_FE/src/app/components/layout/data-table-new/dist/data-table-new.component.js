"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataTableNewComponent = void 0;
var core_1 = require("@angular/core");
var filter_component_1 = require("../filter/filter.component");
var DataTableNewComponent = /** @class */ (function () {
    function DataTableNewComponent(httpClient) {
        this.httpClient = httpClient;
        this.headers = [];
        this.filters = [];
        this.rows = [];
        this.keys = [];
        this.currentPage = 0;
        this.pageSize = 10;
        this.sortColumn = 'Id';
        this.sortDirection = 'asc';
        this.totalDataCount = 0;
        this.searchQuery = '';
        this.totalDataCountChange = new core_1.EventEmitter();
        this.rowClicked = new core_1.EventEmitter();
    }
    DataTableNewComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DataTableNewComponent.prototype.loadData = function () {
        var _this = this;
        var url = this.apiLink + "?sortField=" + this.sortColumn + "&sortOrder=" + this.sortDirection + "&pageIndex=" + this.currentPage + "&pageSize=" + this.pageSize + "&searchQuery=" + this.searchQuery;
        this.httpClient.get(url).subscribe(function (response) {
            _this.totalDataCount = response.totalDataCount;
            _this.totalDataCountChange.emit(_this.totalDataCount);
            _this.rows = response.data;
            _this.keys = Object.keys(_this.rows[0]);
        });
    };
    DataTableNewComponent.prototype.getCellClasses = function (columnKey, cellValue) {
        if (columnKey === 'priority') {
            return {
                'low-priority': cellValue === 'Low',
                'medium-priority': cellValue === 'Medium',
                'high-priority': cellValue === 'High',
                'critical-priority': cellValue === 'Critical'
            };
        }
        if (columnKey === 'status') {
            return {
                'open-status': cellValue === 'Open',
                'inprogress-status': cellValue === 'In Progress',
                'onhold-status': cellValue === 'On Hold',
                'resolved-status': cellValue === 'Resolved',
                'cancelled-status': cellValue === 'Cancelled',
                'escalated-status': cellValue === 'Escalated'
            };
        }
        else {
            return {};
        }
    };
    DataTableNewComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.loadData();
    };
    DataTableNewComponent.prototype.onSort = function (column, direction) {
        this.sortColumn = column;
        this.sortDirection = direction;
        this.loadData();
    };
    DataTableNewComponent.prototype.search = function (searchQuery) {
        this.searchQuery = searchQuery;
        this.currentPage = 0;
        this.loadDataDebounced();
    };
    DataTableNewComponent.prototype.loadDataDebounced = function () {
        this.loadData();
    };
    DataTableNewComponent.prototype.onRowClick = function (Id) {
        console.log('Clicked on row with Ticket ID:', Id);
        this.rowClicked.emit(Id);
    };
    __decorate([
        core_1.ViewChild(filter_component_1.FilterComponent)
    ], DataTableNewComponent.prototype, "filterModal");
    __decorate([
        core_1.Input()
    ], DataTableNewComponent.prototype, "headers");
    __decorate([
        core_1.Input()
    ], DataTableNewComponent.prototype, "apiLink");
    __decorate([
        core_1.Input()
    ], DataTableNewComponent.prototype, "filters");
    __decorate([
        core_1.Output()
    ], DataTableNewComponent.prototype, "totalDataCountChange");
    __decorate([
        core_1.Output()
    ], DataTableNewComponent.prototype, "rowClicked");
    DataTableNewComponent = __decorate([
        core_1.Component({
            selector: 'app-data-table-new',
            templateUrl: './data-table-new.component.html',
            styleUrls: ['./data-table-new.component.css']
        })
    ], DataTableNewComponent);
    return DataTableNewComponent;
}());
exports.DataTableNewComponent = DataTableNewComponent;
