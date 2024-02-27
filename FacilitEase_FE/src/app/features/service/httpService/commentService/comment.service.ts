import { Injectable } from '@angular/core';
import { CommentInterface } from '@app/comment-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private azureService: AzureService) {}

  userId: number = this.azureService.userId; 

   getComments(ticketId: number): Observable<CommentInterface[]>{
    return this.httpClient.get<CommentInterface[]>(`https://localhost:7049/api/L3Admin/ticket-commenttext/${ticketId}`)
   }


  addComment(text: string,parentId: number | null,ticketId:number,userId:number): Observable<CommentInterface>{
    return this.httpClient.post<CommentInterface>(
      `https://localhost:7049/api/L3Admin`,
      {
        text,
        parentId,
        ticketId,
        userId
      }
    );
  }

  updateComment(commentId: number, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
      `https://localhost:7049/api/L3Admin/update-comment/${commentId}`,
      {
        text,
      }
    );
  }

  deleteComment(commentId: number): Observable<{}> {
    return this.httpClient.delete(`https://localhost:7049/api/L3Admin/delete-comment/${commentId}`);
  }
  
}
