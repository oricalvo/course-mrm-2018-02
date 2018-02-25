import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin-price',
  templateUrl: './bitcoin-price.component.html',
  styleUrls: ['./bitcoin-price.component.css']
})
export class BitcoinPriceComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {
  }

  ngOnInit() {
  }

  get price() {
    return this.bitcoinService.state.price;
  }
}
