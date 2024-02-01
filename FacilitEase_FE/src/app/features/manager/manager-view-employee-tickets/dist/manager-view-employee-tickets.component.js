"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerViewEmployeeTicketsComponent = void 0;
var core_1 = require("@angular/core");
var ManagerViewEmployeeTicketsComponent = /** @class */ (function () {
    function ManagerViewEmployeeTicketsComponent(masterService, router) {
        this.masterService = masterService;
        this.router = router;
        this.headers = [
            'ID',
            'Ticket Name',
            'Employee Name',
            'Assigned To',
            'Submitted Date',
            'Priority',
            'Status',
        ];
        this.apiLink = '';
    }
    ManagerViewEmployeeTicketsComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLink();
    };
    ManagerViewEmployeeTicketsComponent.prototype.onRowClicked = function (Id) {
        console.log('Row clicked in parent component with ID:', Id);
        this.router.navigate(['manager/manager-view-ticket-simple', Id]);
    };
    ManagerViewEmployeeTicketsComponent = __decorate([
        core_1.Component({
            selector: 'app-manager-view-employee-tickets',
            templateUrl: './manager-view-employee-tickets.component.html',
            styleUrls: ['./manager-view-employee-tickets.component.css']
        })
    ], ManagerViewEmployeeTicketsComponent);
    return ManagerViewEmployeeTicketsComponent;
}());
exports.ManagerViewEmployeeTicketsComponent = ManagerViewEmployeeTicketsComponent;
