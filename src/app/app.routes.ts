import { Routes } from '@angular/router';

import { AddBook } from './components/add-book/add-book';
import { BooksList } from './components/books-list/books-list';
import { BookDetail } from './components/book-detail/book-detail';

export const routes: Routes = [
    { path: '', pathMatch:'full',redirectTo: 'add-book'},
    { path: 'books-list', component: BooksList},
    { path: 'add-book', component: AddBook },
    { path: 'edit-book/:id', component:BookDetail },
];
