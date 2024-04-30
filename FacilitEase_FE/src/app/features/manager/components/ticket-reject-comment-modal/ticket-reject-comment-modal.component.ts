import { Component, Inject, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { CommentInterface } from '@app/comment-interface';
import { CommentService } from '@app/features/service/httpService/commentService/comment.service';

@Component({
  selector: 'app-ticket-reject-comment-modal',
  templateUrl: './ticket-reject-comment-modal.component.html',
  styleUrls: ['./ticket-reject-comment-modal.component.css']
})
export class TicketRejectCommentModalComponent {
commentControl = new FormControl('', Validators.required);
comment:string='';
ticketId !:number;
userId !:number;
comments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;
constructor(
  public dialogRef: MatDialogRef<TicketRejectCommentModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private commentService: CommentService
){
  this.ticketId = data.ticketId;
  this.userId = data.userId;
}
onCancelClick(): void {
  this.dialogRef.close(false);
}

onRejectClick(): void {
  this.comment = "This ticket has been rejected. Reason for rejection: "+this.comment;
  this.commentService.addComment(this.comment,null,this.ticketId,this.userId)
  .subscribe((createdComment) => {
    this.comments = [...this.comments, createdComment];
    this.activeComment = null;
  });
  this.dialogRef.close({comment: this.comment });
}
}
