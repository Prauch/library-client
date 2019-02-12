import { Component, OnInit } from '@angular/core';
import { Library } from '../shared/models/library.model';
import { Router } from '@angular/router';
import { DataService } from '../shared/data/data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  addLibraryForm: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addLibraryForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      libraryNumber: ['', Validators.required]
    });

  }

  onSubmit(){
    this.dataService.createLibrary(this.addLibraryForm.value).subscribe( data => this.router.navigate(["/library-list"]));
  }

  

}
