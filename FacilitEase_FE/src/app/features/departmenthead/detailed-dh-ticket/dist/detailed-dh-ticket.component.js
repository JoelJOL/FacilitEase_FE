"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailedDhTicketComponent = void 0;
var core_1 = require("@angular/core");
var modal_component_1 = require("@app/components/layout/modal/modal.component");
var DetailedDhTicketComponent = /** @class */ (function () {
    function DetailedDhTicketComponent(route, departmentHeadService, approveDenyService, modalService) {
        this.route = route;
        this.departmentHeadService = departmentHeadService;
        this.approveDenyService = approveDenyService;
        this.modalService = modalService;
        this.customHeaderText = '';
        this.ticketId = 0;
        this.editMode = false;
    }
    DetailedDhTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var ticketId = Number(params['Id']);
            console.log(ticketId);
            _this.departmentHeadService
                .getdepartmentHeadTicketDetails(ticketId)
                .subscribe(function (data) {
                _this.ticketDetails = data;
                console.log(_this.ticketDetails);
                console.log(22);
            });
        });
    };
    DetailedDhTicketComponent.prototype.updateTicket = function (isApproved) {
        var _this = this;
        var ticketId = this.ticketDetails.id.toString();
        if (ticketId) {
            var confirmation = window.confirm('Are you sure you want to update the ticket?');
            if (confirmation) {
                this.approveDenyService.updateTicket(ticketId, isApproved).subscribe(function () {
                    console.log('Ticket updated successfully');
                    alert('Ticket updated successfully');
                    _this.redirectToPreviousPage();
                }, function (error) {
                    console.error('Error updating ticket', error);
                });
            }
        }
    };
    DetailedDhTicketComponent.prototype.redirectToPreviousPage = function () {
        window.history.back();
    };
    DetailedDhTicketComponent.prototype.onEditModeChange = function (editMode) {
        // Update the editMode value
        this.editMode = editMode;
        console.log('Grand parent', this.editMode);
    };
    DetailedDhTicketComponent.prototype.handleAction = function (ticketDetails) {
        if (this.editMode) {
            console.log('Newww', this.editMode);
            alert('Your changes have not been saved!');
        }
        else {
            this.openModal(ticketDetails);
        }
    };
    // Open modal with ticket details
    DetailedDhTicketComponent.prototype.openModal = function (ticketDetails) {
        this.modalRef = this.modalService.show(modal_component_1.ModalComponent, {
            initialState: {
                ticketDetails: ticketDetails
            }
        });
    };
    DetailedDhTicketComponent = __decorate([
        core_1.Component({
            selector: 'app-detailed-dh-ticket',
            templateUrl: './detailed-dh-ticket.component.html',
            styleUrls: ['./detailed-dh-ticket.component.css']
        })
    ], DetailedDhTicketComponent);
    return DetailedDhTicketComponent;
}());
exports.DetailedDhTicketComponent = DetailedDhTicketComponent;
