import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '../../node_modules/@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ROUTES } from './app.routes';
import { NoContentComponent } from './no-content';
import { MenuComponent } from './menu';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NoContentComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
