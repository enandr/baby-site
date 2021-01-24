import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Theme/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProgressDateComponent } from './Pages/progress-date/progress-date.component';
import { SuggestANameComponent } from './Pages/suggest-a-name/suggest-a-name.component';
import { ViewNamesComponent } from './Pages/view-names/view-names.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { PhotosComponent } from './Pages/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProgressDateComponent,
    SuggestANameComponent,
    ViewNamesComponent,
    AdminComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
