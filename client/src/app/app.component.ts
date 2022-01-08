import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  selectedFile: File|any = null;

  constructor(private http: HttpClient){}

  onFileSelected(event: any){
    this.selectedFile =<File> event.target.files[0];
  }

  submitForm(form: NgForm){
    const formData = new FormData();
    console.log(form.value);
    formData.append('file', this.selectedFile!, this.selectedFile?.name);
    formData.append('amount', form.value.amount.toString());
    formData.append('date', form.value.date.toString());
    formData.append('description', form.value.description.toString());
    

    this.http.post(`https://localhost:5001/api/uiowa`, formData)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
