import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { BooksComponent } from './books/books.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent, BooksComponent, ContributorsComponent, ContactComponent],
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
