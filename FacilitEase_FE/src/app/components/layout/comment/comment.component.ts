import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { Activecommenttype } from '@app/activecommenttype';
import { CommentInterface } from '@app/comment-interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  @Input() comment!: CommentInterface;
  @Input() activeComment!: ActiveCommentInterface | null;
  @Input() replies!: CommentInterface[];
  @Input() currentUserId: string|undefined;
  @Input() parentId!: string | null;

  @Output()
  setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output()
  deleteComment = new EventEmitter<string>();
  @Output()
  addComment = new EventEmitter<{ text: string; parentId: string | null }>();
  @Output()
  updateComment = new EventEmitter<{ text: string; commentId: string }>();

  createdAt: string = '';
  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;
  activeCommentType = Activecommenttype;
  replyId: string | null = null;

  ngOnInit(): void {
    const fiveMinutes = 300000;
    const timePassed =
      new Date().getMilliseconds() -
        new Date(this.comment.createdAt).getMilliseconds() >
      fiveMinutes;
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString();
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
    this.canDelete =
      this.currentUserId === this.comment.userId &&
      this.replies.length === 0 &&
      !timePassed;
    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying(): boolean {
    if (!this.activeComment) {
      return false;
    }
    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === this.activeCommentType.replying
    );
  }

  isEditing(): boolean {
    if (!this.activeComment) {
      return false;
    }
    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === 'editing'
    );
  }
}
