"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TicketNaSimpleComponent = void 0;
var core_1 = require("@angular/core");
var TicketNaSimpleComponent = /** @class */ (function () {
    function TicketNaSimpleComponent(agentService) {
        this.agentService = agentService;
        this.notes = 'Default Notes';
        this.lastupdate = 'Default time';
        this.ticketId = 0;
        this.commentText = '';
    }
    TicketNaSimpleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentService.getCommentText(this.ticketId).subscribe(function (commentText) {
            console.log('Comment Text:', commentText);
            _this.commentText = commentText;
        });
    };
    __decorate([
        core_1.Input()
    ], TicketNaSimpleComponent.prototype, "notes");
    __decorate([
        core_1.Input()
    ], TicketNaSimpleComponent.prototype, "lastupdate");
    __decorate([
        core_1.Input()
    ], TicketNaSimpleComponent.prototype, "ticketId");
    TicketNaSimpleComponent = __decorate([
        core_1.Component({
            selector: 'app-ticket-na-simple',
            templateUrl: './ticket-na-simple.component.html',
            styleUrls: ['./ticket-na-simple.component.css']
        })
    ], TicketNaSimpleComponent);
    return TicketNaSimpleComponent;
}());
exports.TicketNaSimpleComponent = TicketNaSimpleComponent;
