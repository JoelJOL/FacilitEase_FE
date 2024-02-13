"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarFooterComponent = void 0;
var core_1 = require("@angular/core");
var support_component_1 = require("@app/components/layout/support/support.component");
var SidebarFooterComponent = /** @class */ (function () {
    function SidebarFooterComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.collapsed = false; // Assuming 'collapsed' is an input property
        this.myTeam = { logo: 'assets/sidebar-myTeam.png', title: 'My Team' };
        this.support = { logo: 'assets/sidebar-support.png', title: 'Support' };
        this.fieldClicked = new core_1.EventEmitter();
        this.showModal = false;
    }
    SidebarFooterComponent.prototype.onFieldClicked = function () {
        this.modalService.openSupportModal();
    };
    SidebarFooterComponent.prototype.onTeamClicked = function (clickedField) {
        this.fieldClicked.emit(clickedField);
    };
    SidebarFooterComponent.prototype.closeModal = function () {
        this.showModal = false;
        this.modalService.closeSupportModal();
    };
    __decorate([
        core_1.Input()
    ], SidebarFooterComponent.prototype, "collapsed");
    __decorate([
        core_1.ViewChild(support_component_1.SupportComponent)
    ], SidebarFooterComponent.prototype, "modal");
    __decorate([
        core_1.Output()
    ], SidebarFooterComponent.prototype, "fieldClicked");
    SidebarFooterComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-footer',
            templateUrl: './sidebar-footer.component.html',
            styleUrls: ['./sidebar-footer.component.css']
        })
    ], SidebarFooterComponent);
    return SidebarFooterComponent;
}());
exports.SidebarFooterComponent = SidebarFooterComponent;
