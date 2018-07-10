import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ROUTES } from './app.routes';
import { NoContentComponent } from './no-content';
import { MenuComponent } from './menu';
import { HttpService } from './common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NoContentComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
