// sla-edit-modal.component.ts
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SlaEditServiceService } from '@app/features/service/httpService/slaEditService/sla-edit-service.service';
import { HttpResponse } from '@angular/common/http';
import { CommentService } from '@app/features/service/httpService/commentService/comment.service';
import { CommentInterface } from '@app/comment-interface';
import { ActiveCommentInterface } from '@app/active-comment-interface';

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
  ticketId !: number;
  comments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;

  constructor(
    public dialogRef: MatDialogRef<SlaEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private slaEditService: SlaEditServiceService,
    private commentService: CommentService
  ) {
    this.ticketId = data.ticketId;
  }

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
    console.log(this.data);
    this.newExpectedDate = new Date(this.data.resolvingTime);
    this.newExpectedDate.setDate(this.newExpectedDate.getDate() + parseInt(this.daysToAdd.toString(), 10));
    console.log(this.newExpectedDate);
    this.comment = `The expected date to resolve this ticket has been changed to ${this.newExpectedDate.toString()}. Reason-: ${this.comment}`
    console.log(this.comment);
    this.commentService.addComment(this.comment,null,this.ticketId,this.data.userId)
    .subscribe((createdComment) => {
      this.comments = [...this.comments, createdComment];
      this.activeComment = null;
    });
    this.slaEditService.editTicketSLA(this.ticketId, this.daysToAdd).subscribe(
      (response : HttpResponse<any>) => {
        console.log('API response:', response);
        // Handle the response as needed
      },
      (error: any) => {
        console.error('API error:', error);
        // Handle errors
      }
    );
    // Save new expected date and comment
    this.dialogRef.close({ newExpectedDate: this.newExpectedDate, comment: this.comment });
  }
}
