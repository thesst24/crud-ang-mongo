import { Component } from '@angular/core';
import { Crud } from '../../service/crud';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-books-list',
  imports: [ RouterLink,CommonModule],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList {

  Books:any = [];

  constructor(private crud:Crud){}

  ngOnInit(): void {
    this.crud.GetBooks().subscribe(res => {
      console.log(res)
      this.Books = res;
    })
  }

  delete(id: any, i:any){
    console.log(id)
    if (window.confirm('Do you want to go ahead?')) {
      this.crud.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }

}
