"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerTicketInfoComponent = void 0;
var core_1 = require("@angular/core");
var tracking_modal_component_1 = require("@app/components/layout/tracking-modal/tracking-modal.component");
var ManagerTicketInfoComponent = /** @class */ (function () {
    function ManagerTicketInfoComponent(masterService, router, modalService) {
        this.masterService = masterService;
        this.router = router;
        this.modalService = modalService;
        this.ticketId = '';
        this.ticketPriority = '';
        this.status = '';
        this.ticket = [];
        this.editingPriority = false;
        this.selectedPriority = -1;
    }
    ManagerTicketInfoComponent.prototype.getPriorityColor = function () {
        if (this.ticketDetails && this.ticketDetails.priorityName) {
            switch (this.ticketDetails.priorityName.toLowerCase()) {
                case 'high':
                    return 'red';
                case 'medium':
                    return 'orange';
                case 'low':
                    return 'green';
                default:
                    return 'black';
            }
        }
        else {
            return 'black';
        }
    };
    ManagerTicketInfoComponent.prototype.startEditingPriority = function () {
        this.editingPriority = true;
        this.selectedPriority = -1;
    };
    ManagerTicketInfoComponent.prototype.onPriorityChange = function (selectedValue) {
        var _this = this;
        if (selectedValue !== -1 && this.ticketDetails.id) {
            // Call the API to change the priority
            this.masterService.changePriority(this.ticketDetails.id, this.selectedPriority)
                .subscribe(function () {
                console.log('Priority changed successfully');
                _this.editingPriority = false;
                _this.router.navigate(['manager/manager-view-waiting-tickets']);
                // You can perform additional actions if needed
            }, function (error) {
                console.error('Error changing priority:', error);
            });
        }
        else {
            console.log("Cant enter the if loop");
        }
    };
    ManagerTicketInfoComponent.prototype.openTrackingModal = function () {
        this.modalRef = this.modalService.show(tracking_modal_component_1.TrackingModalComponent, {
            initialState: {
                ticketDetails: this.ticketDetails
            }
        });
        console.log("This is modal");
    };
    __decorate([
        core_1.Input()
    ], ManagerTicketInfoComponent.prototype, "ticketDetails");
    ManagerTicketInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-manager-ticket-info',
            templateUrl: './manager-ticket-info.component.html',
            styleUrls: ['./manager-ticket-info.component.css']
        })
    ], ManagerTicketInfoComponent);
    return ManagerTicketInfoComponent;
}());
exports.ManagerTicketInfoComponent = ManagerTicketInfoComponent;
