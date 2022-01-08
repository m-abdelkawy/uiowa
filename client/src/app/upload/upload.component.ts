import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  message: string = '';
  progress: number=0;
  @Output() onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  uploadFile(files: any) {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(`https://localhost:5001/api/uiowa`, formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * (event.loaded / event.total!));
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload Success!';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}
