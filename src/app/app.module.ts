import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryPostComponent } from './library-post/library-post.component';
import { RouterModule, Routes } from '@angular/router';
import { LibraryListComponent } from './library-list/library-list.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryPostComponent,
    LibraryListComponent,
    AddLibraryComponent,
    AddBookComponent,
    LibraryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

