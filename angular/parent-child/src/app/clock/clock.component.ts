import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string = 'HH:mm:ss';
  @Output() tick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.time = new Date();

    setInterval(() => {
      this.time = new Date();

      console.log("Emitting tick event");
      this.tick.emit();
    }, 1000);

    console.log("format", this.format);
  }

  ngOnInit() {
    console.log("onInit format", this.format);
  }

  ngOnChanges() {
    console.log("onChanges format", this.format);
  }

}
