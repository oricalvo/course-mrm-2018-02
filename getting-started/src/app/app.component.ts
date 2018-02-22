import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  contacts: Contact[];

  constructor(){
    this.name = "Roni";

    this.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
      {id:3, name: "Udi"},
    ];
  }

  sayHello() {
    alert("Hello " + this.name);
  }

  clean() {
    this.name = "";
  }

  add(){
    const contact: Contact = {
      id: -1,
      name: this.name
    };

    this.contacts.push(contact);
  }
}

interface Contact {
  id: number;
  name: string;
}
