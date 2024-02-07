import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';

@Component({
  selector: 'app-manager-ticket-info',
  templateUrl: './manager-ticket-info.component.html',
  styleUrls: ['./manager-ticket-info.component.css']
})
export class ManagerTicketInfoComponent {
  ticketId: string = '';
  ticketPriority: string = '';
  status: string = '';
  ticket: any = [];
  @Input() ticketDetails: any;
  selectedPriority!: number;
  editingPriority: boolean = false;
  

  
  constructor(private masterService: MasterService, private router:Router) {
    this.selectedPriority = -1;
  }

  getPriorityColor(): string {
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
    } else {
      return 'black';
    }
  }
  startEditingPriority(): void {
    this.editingPriority = true;
    this.selectedPriority = -1;
  }
  onPriorityChange(selectedValue: number): void {
    if (selectedValue !== -1 && this.ticketDetails.id) {
      // Call the API to change the priority
      this.masterService.changePriority(this.ticketDetails.id, this.selectedPriority)
        .subscribe(
          () => {
            console.log('Priority changed successfully');
            this.editingPriority = false;
            this.router.navigate(['manager/manager-view-waiting-tickets']);
            // You can perform additional actions if needed
          },
          (error: any) => {
            console.error('Error changing priority:', error);
          }
        );
    }
    else{
      console.log("Cant enter the if loop");
    }
  }
}
