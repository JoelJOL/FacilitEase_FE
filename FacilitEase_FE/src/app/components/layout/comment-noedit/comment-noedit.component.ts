import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActiveCommentInterface } from '@app/active-comment-interface';
import { Activecommenttype } from '@app/activecommenttype';
import { CommentInterface } from '@app/comment-interface';

@Component({
  selector: 'app-comment-noedit',
  templateUrl: './comment-noedit.component.html',
  styleUrls: ['./comment-noedit.component.css']
})
export class CommentNoeditComponent {
  @Input() comment!: CommentInterface;
  @Input() replies!: CommentInterface[];
  @Input() currentUserId!: number;
  @Input() parentId!: number | null;

  createdAt: string = '';
  activeCommentType = Activecommenttype;
  replyId: number | null = null;

  ngOnInit(): void {
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString();
    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }
}
