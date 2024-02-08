"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyteamEmployeeComponent = void 0;
var core_1 = require("@angular/core");
var MyteamEmployeeComponent = /** @class */ (function () {
    function MyteamEmployeeComponent(masterService, router, managerSubordinatesService) {
        this.masterService = masterService;
        this.router = router;
        this.managerSubordinatesService = managerSubordinatesService;
        this.headers = [
            'Employee Code',
            'Name',
            'DOB',
            'Email',
            'Gender',
            'Department',
            'Position',
            'Location',
        ];
        this.apiLink = '';
    }
    MyteamEmployeeComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLinkProjectEmployeeDetails();
    };
    MyteamEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-myteam-employee',
            templateUrl: './myteam-employee.component.html',
            styleUrls: ['./myteam-employee.component.css']
        })
    ], MyteamEmployeeComponent);
    return MyteamEmployeeComponent;
}());
exports.MyteamEmployeeComponent = MyteamEmployeeComponent;
