import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
