import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  libraries: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllLibraries().subscribe(data => {
      this.libraries = data;
    })

  }

}
