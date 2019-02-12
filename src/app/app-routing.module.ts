import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryListComponent } from './library-list/library-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryPostComponent } from './library-post/library-post.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';

const routes: Routes = [
  {
    path: 'library-list',
    component: LibraryListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'news-list',
    component: LibraryPostComponent
  },
  {
    path: 'add-library',
    component: AddLibraryComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'library-details/:id',
    component: LibraryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
