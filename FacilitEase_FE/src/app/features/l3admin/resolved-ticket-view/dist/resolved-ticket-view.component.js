"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResolvedTicketViewComponent = void 0;
var core_1 = require("@angular/core");
var ResolvedTicketViewComponent = /** @class */ (function () {
    function ResolvedTicketViewComponent(route, agentService) {
        this.route = route;
        this.agentService = agentService;
        this.customHeaderText = 'Supported Attachments';
        this.ticketId = 0;
        this.titleSubAgent = [];
    }
    ResolvedTicketViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ticketId = Number(params['Id']);
            console.log(_this.ticketId);
            console.log('This is the main thing I created!');
        });
        this.agentService.getData(this.ticketId).subscribe(function (ticketDetails) {
            if (ticketDetails) {
                _this.ticketDetails = ticketDetails;
                console.log(ticketDetails);
                _this.titleSubAgent = [
                    { heading: 'Raised By', text: _this.ticketDetails.employeeName },
                    { heading: 'Department', text: _this.ticketDetails.deptName },
                    { heading: 'Manager', text: _this.ticketDetails.managerName },
                    { heading: 'Project Code', text: _this.ticketDetails.projectCode.toString() },
                    { heading: 'Location', text: _this.ticketDetails.locationName }
                ];
            }
            else {
                console.error('API response is empty or does not contain TicketDetails.');
            }
        }, function (error) {
            console.error('Error retrieving ticket details', error);
            // Handle error (if needed)
        });
    };
    ResolvedTicketViewComponent = __decorate([
        core_1.Component({
            selector: 'app-resolved-ticket-view',
            templateUrl: './resolved-ticket-view.component.html',
            styleUrls: ['./resolved-ticket-view.component.css']
        })
    ], ResolvedTicketViewComponent);
    return ResolvedTicketViewComponent;
}());
exports.ResolvedTicketViewComponent = ResolvedTicketViewComponent;
