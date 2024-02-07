import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-documents',
  templateUrl: './ticket-documents.component.html',
  styleUrls: ['./ticket-documents.component.css'],
})
export class TicketDocumentsComponent implements OnInit {
  private apiUrl = 'https://localhost:7049';
  imageId = '950590bf-c9a3-439c-8bac-5a5d0c22bec8';
  imageUrl!: string;
  imageBlob!: Blob;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.imageUrl = `${this.apiUrl}/Resources/Images/${this.imageId}.svg`;

    this.getImage().subscribe(
      (blob: Blob) => {
        this.imageBlob = blob;
        this.displayImage();
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }

  getImage(): Observable<Blob> {
    return this.http.get(this.imageUrl, { responseType: 'blob' });
  }

  displayImage(): void {
    // Convert blob to a data URL and set it as the image source
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.imageBlob);
  }
}
