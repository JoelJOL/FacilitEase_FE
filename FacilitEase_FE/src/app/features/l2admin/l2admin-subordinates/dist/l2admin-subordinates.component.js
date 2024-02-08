"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.L2adminSubordinatesComponent = void 0;
var core_1 = require("@angular/core");
var L2adminSubordinatesComponent = /** @class */ (function () {
    function L2adminSubordinatesComponent(masterService, router) {
        this.masterService = masterService;
        this.router = router;
        this.headers = [
            'EmployeeCode',
            'FirstName',
            'LastName',
            'Dob',
            'Email',
            'Gender',
        ];
        this.apiLink = '';
    }
    L2adminSubordinatesComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLinkL2Subordinates();
    };
    L2adminSubordinatesComponent = __decorate([
        core_1.Component({
            selector: 'app-l2admin-subordinates',
            templateUrl: './l2admin-subordinates.component.html',
            styleUrls: ['./l2admin-subordinates.component.css']
        })
    ], L2adminSubordinatesComponent);
    return L2adminSubordinatesComponent;
}());
exports.L2adminSubordinatesComponent = L2adminSubordinatesComponent;
