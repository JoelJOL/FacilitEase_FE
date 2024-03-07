import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShowEscalationTime {
  departmentId: number;
  categoryName: string;
  time: number;
  editMode: boolean;
}

export interface EditEscalationTime {
  departmentId: number;
  categoryId: number;
  time: number;
}

@Component({
  selector: 'app-edit-sla',
  templateUrl: './edit-sla.component.html',
  styleUrls: ['./edit-sla.component.css']
})
export class EditSlaComponent implements OnInit {
  showTimes: ShowEscalationTime[] = [];
  apiUrlFetch = 'https://localhost:7049/api/L1Admin/SLAInfo/1';
  apiUrlEdit = 'https://localhost:7049/api/L1Admin/EditSLA';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEscalationTimes();
  }

  fetchEscalationTimes(): void {
    this.http.get<ShowEscalationTime[]>(this.apiUrlFetch).subscribe(
      (response) => {
        this.showTimes = response.map((time) => ({ ...time, editMode: false }));
      },
      (error) => {
        console.error('Error fetching escalation times:', error);
      }
    );
  }

  toggleEditMode(escalationTime: ShowEscalationTime): void {
    escalationTime.editMode = !escalationTime.editMode;
  }

  saveEscalationTime(escalationTime: ShowEscalationTime, index: number): void {
    // Call API to save the escalation time
    this.updateEscalationTime(escalationTime,index).subscribe(
      () => {
        escalationTime.editMode = false; // Exit edit mode
      },
      (error) => {
        console.error('Error saving escalation time:', error);
      }
    );
  }

  updateEscalationTime(escalationTime: ShowEscalationTime, index:number): Observable<any> {
    const editData: EditEscalationTime = {
      departmentId: escalationTime.departmentId,
      categoryId: index, // Assuming categoryId is based on the index
      time: escalationTime.time
    };

    return this.http.post(this.apiUrlEdit, editData);
  }
}
