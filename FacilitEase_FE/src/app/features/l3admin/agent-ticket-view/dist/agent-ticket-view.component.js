"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgentTicketViewComponent = void 0;
var core_1 = require("@angular/core");
var modal_component_1 = require("@app/components/layout/modal/modal.component");
var AgentTicketViewComponent = /** @class */ (function () {
    function AgentTicketViewComponent(route, agentService, router, modalService) {
        this.route = route;
        this.agentService = agentService;
        this.router = router;
        this.modalService = modalService;
        this.customHeaderText = 'Supported Attachments';
        this.ticketId = 0;
        this.titleSubAgent = [];
    }
    AgentTicketViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ticketId = Number(params['Id']);
            console.log(_this.ticketId);
        });
        this.agentService.getData(this.ticketId).subscribe(function (ticketDetails) {
            _this.ticketDetails = ticketDetails;
            console.log('Ticket Details:', _this.ticketDetails);
            _this.titleSubAgent = [
                { heading: 'Raised By', text: _this.ticketDetails.employeeName },
                { heading: 'Department', text: _this.ticketDetails.deptName },
                { heading: 'Manager', text: _this.ticketDetails.managerName },
                { heading: 'Project Code', text: _this.ticketDetails.projectCode.toString() },
                { heading: 'Location', text: _this.ticketDetails.locationName },
            ];
        }, function (error) {
            console.error('API call error:', error);
        });
    };
    AgentTicketViewComponent.prototype.openModal = function (ticketDetails) {
        this.modalRef = this.modalService.show(modal_component_1.ModalComponent, {
            initialState: {
                ticketDetails: ticketDetails
            }
        });
    };
    AgentTicketViewComponent.prototype.resolveTicket = function () {
        var _this = this;
        var isConfirmed = window.confirm('Are you sure you want to resolve the ticket?');
        if (isConfirmed) {
            this.agentService.resolveTicket(this.ticketId).subscribe(function (response) {
                console.log('API call success:', response);
                alert('Ticket resolved successfully!');
                _this.router.navigate(['/view-ticket']);
            }, function (error) {
                console.error('API call error:', error);
            });
        }
        else {
            console.log('Ticket resolution canceled.');
        }
    };
    AgentTicketViewComponent = __decorate([
        core_1.Component({
            selector: 'app-agent-ticket-view',
            templateUrl: './agent-ticket-view.component.html',
            styleUrls: ['./agent-ticket-view.component.css']
        })
    ], AgentTicketViewComponent);
    return AgentTicketViewComponent;
}());
exports.AgentTicketViewComponent = AgentTicketViewComponent;
