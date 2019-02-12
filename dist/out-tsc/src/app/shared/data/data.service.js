import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAllBooks = function () {
        return this.http.get('http://localhost:8080/api/book/');
    };
    DataService.prototype.getAllLibraries = function () {
        return this.http.get('http://localhost:8080/api/library/');
    };
    DataService.prototype.createLibrary = function (library) {
        return this.http.post('http://localhost:8080/api/library/', library);
    };
    DataService.prototype.createBook = function (book) {
        return this.http.post('http://localhost:8080/api/book/' + book.libraryNumber + '/', book);
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map