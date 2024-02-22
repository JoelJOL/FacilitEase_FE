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

   getComments(): Observable<CommentInterface[]>{
    return this.httpClient.get<CommentInterface[]>('http://localhost:3000/comments')
   }

   createComment(text: string,parentId: string | null = null): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
      'http://localhost:3000/comments',
      {
        body: text,
        parentId,
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: '1',
        username: 'John',
      }
    );
  }

  addComment(text: string,parentId: number | null = null): Observable<CommentInterface>{
    return this.httpClient.post<CommentInterface>(
      `https://localhost:7049/api/L3Admin`,
      {
        body: text,
        parentId,
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: this.userId,
      }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
      `http://localhost:3000/comments/${id}`,
      {
        body: text,
      }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/comments/${id}`);
  }
  
}
