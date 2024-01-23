// unassigned-tickets.component.ts
import { Component, OnInit } from '@angular/core';
import { DropDownService } from 'src/app/features/service/httpService/dropdown.service';
import { HttpClient } from '@angular/common/http';

// Update the path

@Component({
  selector: 'app-l2admin',
  templateUrl: './l2admin.component.html',
  styleUrls: ['./l2admin.component.css'],
})
export class L2AdminComponent implements OnInit {
  unassignedTickets: any[] = [];
  assignedTickets: any[] = [];

  agents: any[] = [];
  selectedAgent: any;

  constructor(
    private dropDownService: DropDownService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadUnassignedTickets();
    this, this.loadAssignedTickets();
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
