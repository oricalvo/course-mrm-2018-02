import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin-change',
  templateUrl: './bitcoin-change.component.html',
  styleUrls: ['./bitcoin-change.component.css']
})
export class BitcoinChangeComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
  }

  inc(){
    this.bitcoinService.change(1);
  }

  dec(){
    this.bitcoinService.change(-1);
  }
}
