import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Crud } from './../../service/crud';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private Crud: Crud
  ) { 
    this.bookForm =this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): any {
    this.Crud.AddBook(this.bookForm.value)
    .subscribe(()=> {
      console.log('Data added successfully');
       this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
