// import {
//   HttpClient,
//   HttpEventType,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// @Component({
//   selector: 'app-upload',
//   templateUrl: './upload.component.html',
//   styleUrls: ['./upload.component.css'],
// })
// export class UploadComponent implements OnInit {
//   public message: string = ''; // Initialize 'message' property
//   public progress: number = 0; // Initialize 'progress' property
//   @Output() public onUploadFinished = new EventEmitter();

//   constructor(private http: HttpClient) {}

//   ngOnInit() {}

//   public uploadFile = (files: FileList | any) => {
//     if (files.length === 0) {
//       return;
//     }

//     let filesToUpload: File = files[0];
//     const formData = new FormData();
//     formData.append('file', filesToUpload, filesToUpload.name);

//     this.http
//       .post('https://localhost:7049/api/Employee/upload', formData, {
//         reportProgress: true,
//         observe: 'events',
//       })
//       .subscribe(
//         (event: any) => {
//           if (event.type === HttpEventType.UploadProgress) {
//             this.progress = Math.round(
//               (100 * event.loaded) / (event.total || 1)
//             ); // Handle 'event.total' possibly being 'undefined'
//           } else if (event.type === HttpEventType.Response) {
//             this.message = 'Upload success';
//             this.onUploadFinished.emit(event.body);
//           }
//         },
//         (error: HttpErrorResponse) => {
//           this.message = 'Upload failed';
//           // Handle the error as needed
//           console.error(error.message);
//         }
//       );
//   };
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      ticketName: [''],
      ticketDescription: [''],
      priorityId: [1],
      categoryId: [1],
      departmentId: [1],
      documentLink: [null],
      file: [null],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({
        file: file,
      });
    }
  }

  onSubmit() {
    const formData = new FormData();

    Object.keys(this.uploadForm.value).forEach((key) => {
      formData.append(key, this.uploadForm.value[key]);
    });

    this.http
      .post(
        'https://localhost:7049/api/Employee/create-with-documents',
        formData
      )
      .subscribe(
        (response) => {
          console.log('Upload successful', response);
        },
        (error) => {
          console.error('Error uploading', error);
        }
      );
  }
  images: string[] = [];
  ngOnInit(): void {
    this.loadImages();
  }
  loadImages(): void {
    // Replace the URL with your API endpoint to fetch image URLs
    const apiUrl = 'https://localhost:7049/api/Employee/';

    this.http.get<string[]>(apiUrl).subscribe(
      (data) => {
        this.images = data;
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }
}
