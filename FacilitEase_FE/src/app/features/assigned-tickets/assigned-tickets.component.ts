import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css'],
})
export class AssignedTicketsComponent {
  assignedTickets: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadAssignedTickets();
  }

  private loadAssignedTickets() {
    this.http
      .get<any[]>('https://localhost:7049/api/l2/assigned-tickets')
      .subscribe(
        (tickets) => {
          this.assignedTickets = tickets;
        },
        (error) => {
          console.error('Error loading unassigned tickets', error);
        }
      );
  }
}
