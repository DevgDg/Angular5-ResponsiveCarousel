import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {DgcarouselModule} from './dgcarousel/dgcarousel.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DgcarouselModule, MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}