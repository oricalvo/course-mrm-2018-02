import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinChangeComponent } from './bitcoin-change.component';

describe('BitcoinChangeComponent', () => {
  let component: BitcoinChangeComponent;
  let fixture: ComponentFixture<BitcoinChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
