import { Component, Input } from '@angular/core';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { CommentInterface } from '@app/comment-interface';
import { CommentService } from '@app/features/service/httpService/commentService/comment.service';

@Component({
  selector: 'app-comments-noedit',
  templateUrl: './comments-noedit.component.html',
  styleUrls: ['./comments-noedit.component.css']
})
export class CommentsNoeditComponent {

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

  getReplies(commentId: number): CommentInterface[] {
    return this.comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }
}
