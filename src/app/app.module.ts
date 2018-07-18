import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { BooksComponent } from './pages/books/books.component';
import { ContributorsComponent } from './pages/contributors/contributors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookViewComponent } from './pages/book-view/book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    BooksComponent,
    ContributorsComponent,
    ContactComponent,
    BookPreviewComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
