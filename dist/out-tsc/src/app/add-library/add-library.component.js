import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data/data.service';
import { FormBuilder, Validators } from "@angular/forms";
var AddLibraryComponent = /** @class */ (function () {
    function AddLibraryComponent(router, dataService, formBuilder) {
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
    }
    AddLibraryComponent.prototype.ngOnInit = function () {
        this.addLibraryForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            libraryNumber: ['', Validators.required]
        });
    };
    AddLibraryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.createLibrary(this.addLibraryForm.value).subscribe(function (data) { return _this.router.navigate(["/library-list"]); });
    };
    AddLibraryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-library',
            templateUrl: './add-library.component.html',
            styleUrls: ['./add-library.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, DataService, FormBuilder])
    ], AddLibraryComponent);
    return AddLibraryComponent;
}());
export { AddLibraryComponent };
//# sourceMappingURL=add-library.component.js.map