import { Injectable } from '@angular/core';

interface BitcoinState {
  price: number;
}

@Injectable()
export class BitcoinService {
  state: BitcoinState;

  constructor() {
    this.state = {
      price: 0,
    }
  }

  change(change: number) {
    this.state.price += change;
  }
}
