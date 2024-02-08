"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerSubordinatesComponent = void 0;
var core_1 = require("@angular/core");
var ManagerSubordinatesComponent = /** @class */ (function () {
    function ManagerSubordinatesComponent(masterService, router, managerSubordinatesService) {
        this.masterService = masterService;
        this.router = router;
        this.managerSubordinatesService = managerSubordinatesService;
        // employeeDetails: any; // Adjust the type accordingly
        // constructor(
        //   private managerSubordinatesService: ManagerSubordinatesService,
        //   private route: ActivatedRoute
        // ) {}
        // ngOnInit(): void {
        //   this.route.params.subscribe((params) => {
        //     this.getEmployeeDetails();
        //   });
        // }
        // getEmployeeDetails() {
        //   this.managerSubordinatesService.getEmployeeDetails().subscribe(
        //     (data) => {
        //       this.employeeDetails = data;
        //       console.log(this.employeeDetails);
        //     },
        //     (error) => {
        //       console.error('Error fetching employee details:', error);
        //     }
        //   );
        // }
        this.headers = [
            'Employee Code',
            'Name',
            'DOB',
            'Email',
            'Gender',
            'Department',
            'Position',
            'Location',
        ];
        this.apiLink = '';
    }
    ManagerSubordinatesComponent.prototype.ngOnInit = function () {
        this.apiLink = this.managerSubordinatesService.getEmployeeDetails();
    };
    ManagerSubordinatesComponent = __decorate([
        core_1.Component({
            selector: 'app-manager-subordinates',
            templateUrl: './manager-subordinates.component.html',
            styleUrls: ['./manager-subordinates.component.css']
        })
    ], ManagerSubordinatesComponent);
    return ManagerSubordinatesComponent;
}());
exports.ManagerSubordinatesComponent = ManagerSubordinatesComponent;
