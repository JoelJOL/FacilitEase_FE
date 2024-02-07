"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnassignedTicketsComponent = void 0;
var core_1 = require("@angular/core");
var UnassignedTicketsComponent = /** @class */ (function () {
    function UnassignedTicketsComponent(masterService, router, sidebarService) {
        this.masterService = masterService;
        this.router = router;
        this.sidebarService = sidebarService;
        // unassignedTickets: any[] = [];
        // agents: any[] = [];
        // selectedAgent: any;
        // constructor(
        //   private dropDownService: DropDownService,
        //   private http: HttpClient,
        //   private router: Router
        // ) {}
        // ngOnInit() {
        //   this.loadUnassignedTickets();
        //   this.loadAgents();
        // }
        // private loadUnassignedTickets() {
        //   this.http
        //     .get<any[]>('https://localhost:7049/api/l2/unassigned-tickets')
        //     .subscribe(
        //       (tickets) => {
        //         this.unassignedTickets = tickets;
        //       },
        //       (error) => {
        //         console.error('Error loading unassigned tickets', error);
        //       }
        //     );
        // }
        // private loadAgents() {
        //   this.dropDownService.getAgents().subscribe(
        //     (agents: any[]) => {
        //       this.agents = agents;
        //       console.log(agents);
        //     },
        //     (error) => {
        //       console.error('Error loading agents', error);
        //     }
        //   );
        // }
        // onAgentSelected(selectedAgent: number, ticketId: number) {
        //   const data = {
        //     ticketId: ticketId,
        //     agentId: selectedAgent,
        //   };
        //   console.log(selectedAgent);
        //   this.http
        //     .put('https://localhost:7049/api/l2/assign-ticket', data, {
        //       responseType: 'text',
        //     })
        //     .subscribe(
        //       (response) => {
        //         console.log('Ticket assigned successfully', response);
        //         this.loadUnassignedTickets();
        //       },
        //       (error) => {
        //         console.error('Error assigning ticket', error);
        //       }
        //     );
        // }
        this.headers = [
            'Id',
            'Ticket Name',
            'Raised By',
            'Submitted Date',
            'Priority',
            'Status',
        ];
        this.apiLink = '';
    }
    UnassignedTicketsComponent.prototype.ngOnInit = function () {
        this.apiLink = this.masterService.getApiLinkUnassigned();
    };
    UnassignedTicketsComponent.prototype.onRowClicked = function (Id) {
        console.log('Row clicked in parent component with ID:', Id);
        this.router.navigate(['l2/l2admin-ticket-view', Id]);
    };
    UnassignedTicketsComponent = __decorate([
        core_1.Component({
            selector: 'app-unassigned-tickets',
            templateUrl: './unassigned-tickets.component.html',
            styleUrls: ['./unassigned-tickets.component.css']
        })
    ], UnassignedTicketsComponent);
    return UnassignedTicketsComponent;
}());
exports.UnassignedTicketsComponent = UnassignedTicketsComponent;
