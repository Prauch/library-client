import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryListComponent } from './library-list/library-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryPostComponent } from './library-post/library-post.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { AddBookComponent } from './add-book/add-book.component';
var routes = [
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
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map