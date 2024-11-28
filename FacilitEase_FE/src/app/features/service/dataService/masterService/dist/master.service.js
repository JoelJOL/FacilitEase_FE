"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MasterService = void 0;
var core_1 = require("@angular/core");
var MasterService = /** @class */ (function () {
    function MasterService(http, azureService) {
        this.http = http;
        this.azureService = azureService;
        this.userId = this.azureService.userId;
        this.userIdL2Admin = this.azureService.userId;
        this.apiLink = environment.baseUrl+'/api/Manager/GetTicketByManager/2';
        this.apiLinkEscalated = environment.baseUrl+"/api/l2/escalated-tickets/" + this.userIdL2Admin;
        this.apiLinkAssigned = environment.baseUrl+"/api/l2/assigned-tickets/" + this.userIdL2Admin;
        this.apiLinkUnassigned = environment.baseUrl+"/api/l2/unassigned-tickets/" + this.userIdL2Admin;
        this.userIdProjectEmployeeDetails = 19;
        this.apiLinkProjectEmployeeDeatils = environment.baseUrl+"/api/" + this.userIdProjectEmployeeDetails + "/project/employees";
        this.apiLinkTicketsToResolve = environment.baseUrl+"/api/L3Admin/GetRaisedTicketsByAgent/" + this.userIdL2Admin;
        this.apiLinkCancellationRequests = environment.baseUrl+"/api/L3Admin/GetCancelRequestTicketsByAgent/" + this.userIdL2Admin;
    }
    MasterService.prototype.getApiLink = function () {
        var apiUrl = environment.baseUrl+"/api/Manager/GetTicketByManager/" + this.userId;
        return apiUrl;
    };
    MasterService.prototype.getApiLink2 = function () {
        var apiUrl = environment.baseUrl+"/api/Manager/GetApprovalTicket/" + this.userId;
        return apiUrl;
    };
    MasterService.prototype.getApiLink3 = function () {
        var apiUrl = environment.baseUrl+"/api/Manager/GetLiveTicketByManager/" + this.userId;
        return apiUrl;
    };
    MasterService.prototype.getManagerTicketDetails = function (ticketId) {
        var url = environment.baseUrl+"/api/Manager/ViewTicketDetails/" + ticketId;
        return this.http.get(url);
    };
    MasterService.prototype.changePriority = function (ticketId, newPriorityId) {
        var apiUrl = environment.baseUrl+'/api/Manager';
        return this.http.post(apiUrl + "/ChangePriority", {
            ticketId: ticketId,
            newPriorityId: newPriorityId
        });
    };
    MasterService.prototype.ticketDecision = function (ticketId, newStatusId) {
        var apiUrl = environment.baseUrl+'/api/Manager';
        return this.http.post(apiUrl + "/TicketDecision", {
            ticketId: ticketId,
            newStatusId: newStatusId
        });
    };
    MasterService.prototype.sendForApproval = function (ticketId, currentControllerId) {
        var apiUrl = environment.baseUrl+'/api/Manager';
        return this.http.post(apiUrl + "/SendForApproval", {
            ticketId: ticketId,
            currentControllerId: currentControllerId
        });
    };
    MasterService.prototype.getApiLinkEscalated = function () {
        return this.apiLinkEscalated;
    };
    MasterService.prototype.getApiLinkAssigned = function () {
        return this.apiLinkAssigned;
    };
    MasterService.prototype.getApiLinkUnassigned = function () {
        return this.apiLinkUnassigned;
    };
    MasterService.prototype.getApiLinkProjectEmployeeDetails = function () {
        return this.apiLinkProjectEmployeeDeatils;
    };
    MasterService.prototype.getApiLinkTicketsToResolve = function () {
        return this.apiLinkTicketsToResolve;
    };
    MasterService.prototype.getApiLinkCancellationRequests = function () {
        return this.apiLinkCancellationRequests;
    };
    MasterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MasterService);
    return MasterService;
}());
exports.MasterService = MasterService;
