import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinPriceComponent } from './bitcoin-price.component';

describe('BitcoinPriceComponent', () => {
  let component: BitcoinPriceComponent;
  let fixture: ComponentFixture<BitcoinPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
