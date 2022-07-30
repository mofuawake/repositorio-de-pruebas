import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LecComponent } from './lec/lec.component';

@NgModule({
  declarations: [
    AppComponent,
    LecComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 35c8f94190be32beededa8ec9d38734aae303d0e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
