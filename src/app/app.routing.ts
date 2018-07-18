import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'contributors',
    component: BooksComponent
  },
  {
    path: 'contact',
    component: BooksComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
