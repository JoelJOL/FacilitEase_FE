"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerViewWaitingTicketsComponent = void 0;
var core_1 = require("@angular/core");
var ManagerViewWaitingTicketsComponent = /** @class */ (function () {
    function ManagerViewWaitingTicketsComponent(masterService, router) {
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
    ManagerViewWaitingTicketsComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLink2();
    };
    ManagerViewWaitingTicketsComponent.prototype.onRowClicked = function (Id) {
        console.log('Row clicked in parent component with ID:', Id);
        this.router.navigate(['manager/manager-view-ticket-detail', Id]);
    };
    ManagerViewWaitingTicketsComponent = __decorate([
        core_1.Component({
            selector: 'app-manager-view-waiting-tickets',
            templateUrl: './manager-view-waiting-tickets.component.html',
            styleUrls: ['./manager-view-waiting-tickets.component.css']
        })
    ], ManagerViewWaitingTicketsComponent);
    return ManagerViewWaitingTicketsComponent;
}());
exports.ManagerViewWaitingTicketsComponent = ManagerViewWaitingTicketsComponent;
