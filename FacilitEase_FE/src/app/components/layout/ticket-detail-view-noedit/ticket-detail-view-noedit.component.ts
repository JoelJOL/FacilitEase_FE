import { Component, Input } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Component({
  selector: 'app-ticket-detail-view-noedit',
  templateUrl: './ticket-detail-view-noedit.component.html',
  styleUrls: ['./ticket-detail-view-noedit.component.css'],
})
export class TicketDetailViewNoeditComponent {
  customHeaderText = '';
  selectedTab: string = 'Details'; // Tab Selection Variable
  userEmail: string = "joel.jose@experionglobal.com" // Email ID for chat

  currentUserId: number = this.azureService.userId;
  constructor(private azureService: AzureService) {
    console.log('This is the ID', this.currentUserId);
  }
  @Input() ticketId: number = 0;
  ngOnInit() {
    console.log(this.ticketId);
  }
  @Input() ticketDetails: any;
  @Input() headings: any[] = [];

  // Method to open the teams chat when button is clicked
  goToTeams() {
    let n = "Hey " + "\nCongratulations on being a fool 🎉...";
    location.href = "MSTeams:/l/chat/0/0?users=" + this.userEmail + "&message= " + n;
  }
}

