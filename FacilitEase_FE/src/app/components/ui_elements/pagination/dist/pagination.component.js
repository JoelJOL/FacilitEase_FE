"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationComponent = void 0;
var core_1 = require("@angular/core");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.itemsPerPage = 10; // Number of items per page
        this.currentPage = 1; // Current page
        this.pageChange = new core_1.EventEmitter(); // Event emitter for page change
        this.visibleNumbers = [];
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        this.updateVisibleNumbers();
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if ('totalItems' in changes) {
            this.updateVisibleNumbers();
        }
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChange.emit(this.currentPage - 1);
            this.updateVisibleNumbers();
        }
    };
    PaginationComponent.prototype.next = function () {
        var totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.pageChange.emit(this.currentPage - 1);
            this.updateVisibleNumbers();
        }
    };
    PaginationComponent.prototype.selectNumber = function (number) {
        this.currentPage = number - 1;
        this.pageChange.emit(this.currentPage);
        this.currentPage++;
        this.updateVisibleNumbers();
    };
    PaginationComponent.prototype.updateVisibleNumbers = function () {
        var totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        var maxVisibleNumbers = 5;
        var halfMaxVisibleNumbers = Math.floor(maxVisibleNumbers / 2);
        var startPage = Math.max(1, this.currentPage - halfMaxVisibleNumbers);
        var endPage = Math.min(totalPages, startPage + maxVisibleNumbers - 1);
        if (totalPages >= maxVisibleNumbers) {
            if (endPage === totalPages) {
                startPage = Math.max(1, totalPages - maxVisibleNumbers + 1);
            }
            else if (startPage === 1) {
                endPage = Math.min(maxVisibleNumbers, totalPages);
            }
        }
        this.visibleNumbers = Array.from({ length: endPage - startPage + 1 }, function (_, i) { return startPage + i; });
    };
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "totalItems");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "itemsPerPage");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "currentPage");
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "pageChange");
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
