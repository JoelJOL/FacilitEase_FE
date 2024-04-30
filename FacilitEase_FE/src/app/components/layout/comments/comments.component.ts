import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { CommentInterface } from '@app/comment-interface';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { ConfirmationModalComponent } from '@app/features/manager/components/confirmation-modal/confirmation-modal.component';
import { CommentService } from '@app/features/service/httpService/commentService/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() currentUserId!: number;
  @Input() ticketId!: number;

  comments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;
  commentsVisible: boolean = false;
  toggleButtonText: string = 'View Comments';

  constructor(private commentService: CommentService, private dialog: MatDialog, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.commentService.getComments(this.ticketId).subscribe((comments) => {
      console.log('comments', comments)
      this.comments = comments;
      console.log(this.currentUserId);
    })
  }

  getRootComments(): CommentInterface[] {
    return this.comments.filter((comment) => comment.parentId === null);
  }

  toggleReplies(comment: CommentInterface): void {
    comment.showReplies = !comment.showReplies;
  }

  deleteComment(commentId: number): void {
    let confirmationMessage = 'Are you sure you want to delete this comment?';
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.commentService.deleteComment(commentId).subscribe(
          (response) => {
            console.log('API call success:', response);
            this.deleteCommentFromList(this.comments, commentId);
            this.activeComment = null;
            this.commentService.getComments(this.ticketId).subscribe((comments) => {
              console.log('comments', comments)
              this.comments = comments;
              console.log(this.currentUserId);
            })
            this.toastr.success('Comment deletion success!', 'Success');
          },
          (error) => {
            console.error('API call error:', error);
          }
        );
      }
    });
  }

  deleteCommentFromList(comments: CommentInterface[], commentId: number): void {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === commentId) {
        comments.splice(i, 1); // Remove the comment from the list
        return;
      }
      if (comments[i].replies && comments[i].replies.length > 0) {
        this.deleteCommentFromList(comments[i].replies, commentId); // Recursively search in replies
      }
    }
  }

  setActiveComment(activeComment: ActiveCommentInterface | null): void {
    this.activeComment = activeComment;
  }

  addComment({ text, parentId }: { text: string; parentId: number | null }): void {
    this.commentService
      .addComment(text, parentId, this.ticketId, this.currentUserId)
      .subscribe((createdComment) => {
        // If parentId is null, it means it's a root comment
        if (parentId === null) {
          // Add the new comment to the root comments list
          this.comments = [...this.comments, createdComment];
        } else {
          // Find the parent comment in the comments list
          this.updateParentCommentReplies(this.comments, parentId, createdComment);
        }
        this.activeComment = null;
        this.commentService.getComments(this.ticketId).subscribe((comments) => {
          console.log('comments', comments)
          this.comments = comments;
          console.log(this.currentUserId);
        })
        this.toastr.success('Comment added successfully');
      });
  }

  updateParentCommentReplies(comments: CommentInterface[], parentId: number, newComment: CommentInterface): void {
    for (const comment of comments) {
      if (comment.id === parentId) {
        // Update the parent comment's replies with the new reply
        comment.replies = [...(comment.replies || []), newComment];
        return;
      }
      if (comment.replies) {
        // Recursively search for the parent comment in the replies
        this.updateParentCommentReplies(comment.replies, parentId, newComment);
      }
    }
  }

  updateComment({ text, commentId }: { text: string; commentId: number }): void {
    let confirmationMessage = 'Are you sure you want to edit this comment?';
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: confirmationMessage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.commentService
          .updateComment(commentId, text)
          .subscribe((updatedComment) => {
            // Update the specific comment in the comments array
            this.updateCommentInArray(this.comments, updatedComment);
            this.activeComment = null;
            this.commentService.getComments(this.ticketId).subscribe((comments) => {
              console.log('comments', comments)
              this.comments = comments;
              console.log(this.currentUserId);
            })
            this.toastr.success('Comment updation success!', 'Success');

          },
            (error) => {
              console.error('API call error:', error);
            });
      }
    });
  }

  updateCommentInArray(comments: CommentInterface[], updatedComment: CommentInterface): void {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === updatedComment.id) {
        // Update the specific comment
        comments[i] = updatedComment;
        return;
      }
      if (comments[i].replies && comments[i].replies.length > 0) {
        // Recursively update nested comments
        this.updateCommentInArray(comments[i].replies, updatedComment);
      }
    }
  }



  getReplies(commentId: number): CommentInterface[] {
    return this.comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }


  toggleCommentsVisibility(): void {
    this.commentsVisible = !this.commentsVisible;
    this.toggleButtonText = this.commentsVisible ? 'Hide Comments' : 'View Comments';
  }


}
