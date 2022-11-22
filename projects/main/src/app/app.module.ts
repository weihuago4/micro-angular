import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Subapp1Component } from './subapp1/subapp1.component';
import { Subapp2Component } from './subapp2/subapp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Subapp1Component,
    Subapp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
