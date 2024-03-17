import { Component, Input, OnInit } from '@angular/core';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { CommentInterface } from '@app/comment-interface';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { CommentService } from '@app/features/service/httpService/commentService/comment.service';

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

  constructor(private commentService: CommentService) {
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

  updateComment({
    text,
    commentId,
  }: {
    text: string;
    commentId: number;
  }): void {
    this.commentService
      .updateComment(commentId, text)
      .subscribe((updatedComment) => {
        // If the updated comment is a root comment, update it in the root comments list
        const rootCommentIndex = this.comments.findIndex(comment => comment.id == commentId);
        console.log(rootCommentIndex);
        if (rootCommentIndex !== -1) {
            this.comments[rootCommentIndex] = updatedComment;
            console.log("This is needed",this.comments);
        } else {
            // If the updated comment is a reply, find its parent comment and update it in the replies
            console.log("Hi");
            this.modifyParentCommentReplies(this.comments, updatedComment.parentId, updatedComment);
        }
        
        this.activeComment = null;
      });
  }


  deleteComment(commentId: number): void {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    });
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

  modifyParentCommentReplies(comments: CommentInterface[], parentId: number, newComment: CommentInterface): void {
    
    for (const comment of comments) {
      console.log(comment.id)
      console.log(parentId)
        if (comment.id == parentId) {

            // Replace the parent comment's replies with the new reply
            comment.replies = [newComment];
            console.log("Hiii",comment.replies)
            return;
        }
        if (comment.replies) {
            // Recursively search for the parent comment in the replies
            this.updateParentCommentReplies(comment.replies, parentId, newComment);
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

}
