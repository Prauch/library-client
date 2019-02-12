import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data/data.service';
var LibraryListComponent = /** @class */ (function () {
    function LibraryListComponent(dataService) {
        this.dataService = dataService;
    }
    LibraryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllLibraries().subscribe(function (data) {
            _this.libraries = data;
        });
    };
    LibraryListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-library-list',
            templateUrl: './library-list.component.html',
            styleUrls: ['./library-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], LibraryListComponent);
    return LibraryListComponent;
}());
export { LibraryListComponent };
//# sourceMappingURL=library-list.component.js.map