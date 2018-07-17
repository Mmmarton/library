import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent],
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
