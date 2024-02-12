import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EditEscalationTime {
  departmentId: number;
  priorityId: number;
  time: number;
}

export interface ShowEscalationTime {
  departmentId: number;
  priorityName: string;
  time: number;
}

@Component({
  selector: 'app-edit-sla',
  templateUrl: './edit-sla.component.html',
  styleUrls: ['./edit-sla.component.css']
})
export class EditSlaComponent implements OnInit {
  showTimes: ShowEscalationTime[] = [];
  apiUrl = 'https://localhost:7049/api/L1Admin/SLAInfo/1';
  apiUrl2 = 'https://localhost:7049/api/L1Admin/EditSLA';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEscalationTimes();
  }

  fetchEscalationTimes(): void {
    this.http.get<ShowEscalationTime[]>(this.apiUrl).subscribe(
      (response) => {
        this.showTimes = response;
      },
      (error) => {
        console.error('Error fetching escalation times:', error);
      }
    );
  }

  updateEscalationTime(escalationTime: ShowEscalationTime, index: number): Observable<any> {
    const editData: EditEscalationTime = {
      departmentId: escalationTime.departmentId,
      priorityId: index + 1, // Row number + 1 to start from 1 instead of 0
      time: escalationTime.time
    };

    // Assuming your API requires PUT request for updating
    return this.http.post(this.apiUrl2, editData);
  }
}
