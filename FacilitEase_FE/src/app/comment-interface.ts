export interface CommentInterface {
    id: number;
    text: string;
    employeeName: string;
    userId: number;
    parentId: number;
    createdAt: string;
    updatedAt: string;
    replies: CommentInterface[];
    showReplies?: boolean;
}
