import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data/data.service';
var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService) {
        this.dataService = dataService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllBooks().subscribe(function (data) {
            _this.books = data;
        });
    };
    BookListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-book-list',
            templateUrl: './book-list.component.html',
            styleUrls: ['./book-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], BookListComponent);
    return BookListComponent;
}());
export { BookListComponent };
//# sourceMappingURL=book-list.component.js.map