import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clockFormat: string = "HH";

  constructor() {
    this.name = "Roni";

    this.contacts = [
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
      {id: 3, name: "Udi"},
    ];
  }

  changeFormat() {
    this.clockFormat = "HH:mm";
  }

  onTick() {
    console.log("tick");
  }
}

interface Contact {
  id: number;
  name: string;
}
