"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerComponent = void 0;
var core_1 = require("@angular/core");
var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(router, sidebarService, userRoleService) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.userRoleService = userRoleService;
        this.userRole = 'Manager';
        this.yourFieldsArray = [
            {
                logo: 'assets/hourglass-start-solid.svg',
                title: 'Waiting for Approval'
            },
            {
                logo: 'assets/ticket-solid.svg',
                title: 'Employee Tickets',
                subfields: ['Live Tickets', 'All Tickets']
            },
        ];
        this.showManagerTickets = false;
        this.isSidebarCollapsed = false;
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRoleService.setUserRole(this.userRole);
        this.sidebarService.sidebarState$.subscribe(function (isCollapsed) {
            _this.isSidebarCollapsed = isCollapsed;
            // Optionally, you can set showL2AdminTickets based on isCollapsed state
            // this.showL2AdminTickets = !isCollapsed; // Example, adjust as needed
        });
    };
    ManagerComponent.prototype.onFieldClicked = function (clickedField) {
        console.log("Handling in App Component for " + clickedField.title);
        if (clickedField.title === 'Employee Tickets') {
            this.showManagerTickets = true;
        }
        else if (clickedField.title === 'Waiting for Approval') {
            this.showManagerTickets = true;
            this.router.navigate(['manager/manager-view-waiting-tickets']);
        }
        else {
            this.showManagerTickets = false;
        }
    };
    ManagerComponent.prototype.onSubfieldClicked = function (event) {
        if (event.field.title === 'Employee Tickets') {
            if (event.subfield === 'Live Tickets') {
                this.showManagerTickets = true;
                this.router.navigate(['manager/manager-view-live-employee-tickets']);
            }
            else if (event.subfield === 'All Tickets') {
                this.showManagerTickets = true;
                this.router.navigate(['manager/manager-view-employee-tickets']);
            }
        }
    };
    ManagerComponent = __decorate([
        core_1.Component({
            selector: 'app-manager',
            templateUrl: './manager.component.html',
            styleUrls: ['./manager.component.css']
        })
    ], ManagerComponent);
    return ManagerComponent;
}());
exports.ManagerComponent = ManagerComponent;
