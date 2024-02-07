"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EscalatedticketsComponent = void 0;
var core_1 = require("@angular/core");
var EscalatedticketsComponent = /** @class */ (function () {
    function EscalatedticketsComponent(masterService, router) {
        this.masterService = masterService;
        this.router = router;
        // escalatedTickets: any[] = [];
        // constructor(private http: HttpClient, private router: Router) {}
        // ngOnInit() {
        //   this.loadEscalatedTickets();
        // }
        // private loadEscalatedTickets() {
        //   this.http
        //     .get<any[]>('https://localhost:7049/api/l2/escalated-tickets')
        //     .subscribe(
        //       (escalatedTickets) => {
        //         this.escalatedTickets = escalatedTickets;
        //       },
        //       (error) => {
        //         console.error('Error loading escalated tickets', error);
        //       }
        //     );
        // }
        this.headers = [
            'ID',
            'Ticket Name',
            'Raised By',
            'Assigned To',
            'Submitted Date',
            'Priority',
            'Status',
        ];
        this.apiLink = '';
    }
    EscalatedticketsComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLinkEscalated();
    };
    EscalatedticketsComponent.prototype.onRowClicked = function (rowId) {
        console.log('Row clicked in parent component with ID:', rowId);
        this.router.navigate(['l2/details-escalated', rowId]);
    };
    EscalatedticketsComponent = __decorate([
        core_1.Component({
            selector: 'app-escalated-tickets',
            templateUrl: './escalated-tickets.component.html',
            styleUrls: ['./escalated-tickets.component.css']
        })
    ], EscalatedticketsComponent);
    return EscalatedticketsComponent;
}());
exports.EscalatedticketsComponent = EscalatedticketsComponent;
