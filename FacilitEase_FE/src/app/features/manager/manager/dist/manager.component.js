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
                title: 'Waiting Tickets'
            },
            {
                logo: 'assets/ticket-solid.svg',
                title: 'Employee Tickets'
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
        this.showManagerTickets = true;
        this.router.navigate(['manager/manager-view-waiting-tickets']);
    };
    ManagerComponent.prototype.onFieldClicked = function (clickedField) {
        console.log("Handling in App Component for " + clickedField.title);
        if (clickedField.title === 'My Team') {
            this.showManagerTickets = true;
            this.router.navigate(['manager/manager-subordinates']);
        }
        else if (clickedField.title === 'Employee Tickets') {
            this.showManagerTickets = true;
            this.router.navigate(['manager/manager-view-employee-tickets']);
        }
        else if (clickedField.title === 'Waiting Tickets') {
            this.showManagerTickets = true;
            this.router.navigate(['manager/manager-view-waiting-tickets']);
        }
        else {
            this.showManagerTickets = false;
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
