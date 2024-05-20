import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EscalationTime {
  departmentId: number;
  categoryName: string;
  time: number;
  editMode: boolean;
  categoryId: number; // Add categoryId property
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
  showTimes: EscalationTime[] = [];
  apiUrlFetch = 'https://localhost:7049/api/L1Admin/SLAInfo/1';
  apiUrlEdit = 'https://localhost:7049/api/L1Admin/EditSLA';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEscalationTimes();
  }

  fetchEscalationTimes(): void {
    this.http.get<EscalationTime[]>(this.apiUrlFetch).subscribe(
      (response) => {
        this.showTimes = response.map((time, index) => ({ ...time, editMode: false, categoryId: index + 1 }));
      },
      (error) => {
        console.error('Error fetching escalation times:', error);
      }
    );
  }
  

  toggleEditMode(escalationTime: EscalationTime): void {
    escalationTime.editMode = !escalationTime.editMode;
  }

  saveEscalationTime(escalationTime: EscalationTime, index: number): void {
    // Call API to save the escalation time
    this.updateEscalationTime(escalationTime).subscribe(
      () => {
        escalationTime.editMode = false; // Exit edit mode
      },
      (error) => {
        console.error('Error saving escalation time:', error);
      }
    );
  }

  updateEscalationTime(escalationTime: EscalationTime): Observable<any> {
    const editData: EditEscalationTime = {
      departmentId: escalationTime.departmentId,
      categoryId: escalationTime.categoryId, // Use categoryId property
      time: escalationTime.time
    };
  
    return this.http.post(this.apiUrlEdit, editData);
  }
  
}
