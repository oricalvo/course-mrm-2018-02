import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';
import {BitcoinService} from './bitcoin.service';
import { BitcoinChangeComponent } from './bitcoin-change/bitcoin-change.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinPriceComponent,
    BitcoinChangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    BitcoinService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
