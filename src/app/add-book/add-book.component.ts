import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data/data.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      libraryNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    this.dataService.createBook(this.addBookForm.value).subscribe(data => this.router.navigate(['/book-list']));
  }

}
