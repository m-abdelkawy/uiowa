import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
