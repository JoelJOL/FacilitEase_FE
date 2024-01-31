"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerViewTicketDetailComponent = void 0;
var core_1 = require("@angular/core");
var confirmation_modal_component_1 = require("../components/confirmation-modal/confirmation-modal.component");
var ManagerViewTicketDetailComponent = /** @class */ (function () {
    function ManagerViewTicketDetailComponent(masterService, dialog, route, router) {
        this.masterService = masterService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.ticketId = 5;
    }
    ManagerViewTicketDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var idFromRoute = params.get('Id');
            if (idFromRoute) {
                _this.ticketId = +idFromRoute;
                _this.fetchTicketDetails();
            }
        });
    };
    ManagerViewTicketDetailComponent.prototype.fetchTicketDetails = function () {
        var _this = this;
        this.masterService.getManagerTicketDetails(this.ticketId).subscribe(function (response) {
            _this.ticketDetails = response;
            console.log('Ticket Details:', _this.ticketDetails);
        }, function (error) {
            console.error('Error fetching ticket details:', error);
        });
    };
    ManagerViewTicketDetailComponent.prototype.openConfirmationModal = function (action) {
        var _this = this;
        var confirmationMessage = '';
        switch (action) {
            case 'accept':
                confirmationMessage = 'Are you sure you want to accept this ticket?';
                break;
            case 'reject':
                confirmationMessage = 'Are you sure you want to reject this ticket?';
                break;
            case 'forward':
                confirmationMessage = 'Are you sure you want to forward this ticket for approval?';
                break;
            default:
                // Handle other actions if needed
                break;
        }
        var dialogRef = this.dialog.open(confirmation_modal_component_1.ConfirmationModalComponent, {
            width: '400px',
            data: confirmationMessage
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (action === 'accept') {
                    _this.acceptTicket();
                    _this.router.navigate(['manager-view-waiting-tickets']);
                }
                else if (action === 'reject') {
                    _this.rejectTicket();
                    _this.router.navigate(['manager-view-waiting-tickets']);
                }
                else if (action === 'forward') {
                    _this.forwardTicket();
                }
            }
        });
    };
    ManagerViewTicketDetailComponent.prototype.forwardTicket = function () {
        this.masterService.sendForApproval(this.ticketDetails.id, 2)
            .subscribe(function () {
            console.log('Forwarded for approval successfully');
        }, function (error) {
            console.error('Error forwarding for approval:', error);
        });
    };
    ManagerViewTicketDetailComponent.prototype.acceptTicket = function () {
        this.masterService.ticketDecision(this.ticketDetails.id, 2).subscribe(function () {
            console.log('Forwarded for approval successfully');
        }, function (error) {
            console.error('Error forwarding for approval:', error);
        });
    };
    ManagerViewTicketDetailComponent.prototype.rejectTicket = function () {
        this.masterService.ticketDecision(this.ticketDetails.id, 5).subscribe(function () {
            console.log('Forwarded for approval successfully');
        }, function (error) {
            console.error('Error forwarding for approval:', error);
        });
    };
    ManagerViewTicketDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-manager-view-ticket-detail',
            templateUrl: './manager-view-ticket-detail.component.html',
            styleUrls: ['./manager-view-ticket-detail.component.css']
        })
    ], ManagerViewTicketDetailComponent);
    return ManagerViewTicketDetailComponent;
}());
exports.ManagerViewTicketDetailComponent = ManagerViewTicketDetailComponent;
