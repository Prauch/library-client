import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data/data.service';
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(router, dataService, formBuilder) {
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.addBookForm = this.formBuilder.group({
            title: ['', Validators.required],
            author: ['', Validators.required],
            libraryNumber: ['', Validators.required]
        });
    }
    AddBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.createBook(this.addBookForm.value).subscribe(function (data) { return _this.router.navigate(['/book-list']); });
    };
    AddBookComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-book',
            templateUrl: './add-book.component.html',
            styleUrls: ['./add-book.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, DataService, FormBuilder])
    ], AddBookComponent);
    return AddBookComponent;
}());
export { AddBookComponent };
//# sourceMappingURL=add-book.component.js.map