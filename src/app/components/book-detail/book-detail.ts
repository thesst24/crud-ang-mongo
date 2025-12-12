import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from'@angular/router';
import { Crud } from '../../service/crud';
import { FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crud: Crud
  ){
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crud.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res ['description']
      })
    })

    this.updateForm = this.formBuilder.group({
        name:[''],
        price: [''],
        description:  ['']
      })

  }

  ngOnInit(): void {

  }

  onUpdate(): any {
    this.crud.updateBook(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data updated successfully');
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
