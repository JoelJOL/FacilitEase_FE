"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var escalated_tickets_component_1 = require("./escalated-tickets.component");
describe('EscalatedticketsComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [escalated_tickets_component_1.EscalatedticketsComponent]
        });
        fixture = testing_1.TestBed.createComponent(escalated_tickets_component_1.EscalatedticketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
