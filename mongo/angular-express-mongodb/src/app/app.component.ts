import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor(private http: HttpClient){

  }

  async ngOnInit(){
    this.contacts = await this.http.get<Contact[]>("/api/contact").toPromise();

    console.log(this.contacts);
  }
}

export interface Contact {
  id: number;
  name: string;
}
