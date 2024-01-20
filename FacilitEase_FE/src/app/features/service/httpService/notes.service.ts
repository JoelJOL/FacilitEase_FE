import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesApiUrl = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http:HttpClient) { }
  getNotesData() : Observable<any>{
    return this.http.get(this.notesApiUrl);
  }
}
