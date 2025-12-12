import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCrud } from '../../service-crud';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  imports: [],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: ServiceCrud
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
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(()=> {
      console.log('Data added successfully');
       this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
