// sla-edit-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sla-edit-modal',
  templateUrl: './sla-edit-modal.component.html',
  styleUrls: ['./sla-edit-modal.component.css']
})
export class SlaEditModalComponent {
  editingMode: boolean = false;
  daysToAdd!: number;
  newExpectedDate: Date = new Date();
  comment: string = '';

  constructor(
    public dialogRef: MatDialogRef<SlaEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Date
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  onEditClick(): void {
    this.editingMode = true;
  }

  onCancelEditClick(): void {
    this.editingMode = false;
  }

  onSaveClick(): void {
    // Calculate new expected date by adding days
    this.newExpectedDate = new Date(this.data);
    this.newExpectedDate.setDate(this.newExpectedDate.getDate() + parseInt(this.daysToAdd.toString(), 10));
    console.log(this.newExpectedDate);
    this.comment = `The expected date to resolve this ticket has been changed to ${this.newExpectedDate} because ${this.comment}`
    console.log(this.comment);
    // Save new expected date and comment
    this.dialogRef.close({ newExpectedDate: this.newExpectedDate, comment: this.comment });
  }
}
