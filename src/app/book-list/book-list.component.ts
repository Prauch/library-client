import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

}
