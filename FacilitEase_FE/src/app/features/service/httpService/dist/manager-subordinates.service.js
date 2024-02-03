"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerSubordinatesService = void 0;
var core_1 = require("@angular/core");
var ManagerSubordinatesService = /** @class */ (function () {
    function ManagerSubordinatesService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:7049/api/managers/2/subordinates'; // Replace with your actual API URL
    }
    ManagerSubordinatesService.prototype.getEmployeeDetails = function () {
        var url = "" + this.apiUrl; // Adjust the URL based on your API endpoint
        return this.http.get(url);
    };
    ManagerSubordinatesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ManagerSubordinatesService);
    return ManagerSubordinatesService;
}());
exports.ManagerSubordinatesService = ManagerSubordinatesService;
