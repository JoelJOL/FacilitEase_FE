import { Component } from '@angular/core';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unassigned-tickets',
  templateUrl: './unassigned-tickets.component.html',
  styleUrls: ['./unassigned-tickets.component.css'],
})
export class UnassignedTicketsComponent {
  unassignedTickets: any[] = [];

  agents: any[] = [];
  selectedAgent: any;

  constructor(
    private dropDownService: DropDownService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUnassignedTickets();
    this.loadAgents();
  }

  private loadUnassignedTickets() {
    this.http
      .get<any[]>('https://localhost:7049/api/l2/unassigned-tickets')
      .subscribe(
        (tickets) => {
          this.unassignedTickets = tickets;
        },
        (error) => {
          console.error('Error loading unassigned tickets', error);
        }
      );
  }
  private loadAgents() {
    this.dropDownService.getAgents().subscribe(
      (agents: any[]) => {
        this.agents = agents;
        console.log(agents);
      },
      (error) => {
        console.error('Error loading agents', error);
      }
    );
  }
  onAgentSelected(selectedAgent: number, ticketId: number) {
    const data = {
      ticketId: ticketId,
      agentId: selectedAgent,
    };
    console.log(selectedAgent);
    this.http
      .put('https://localhost:7049/api/l2/assign-ticket', data, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Ticket assigned successfully', response);
        },
        (error) => {
          console.error('Error assigning ticket', error);
        }
      );
  }
}
