import { Component } from '@angular/core';
import {ContactBookContact} from './contact-book-contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: ContactBookContact;

  constructor() {
    this.contact = new ContactBookContact('Emmanuel', 'Macron', 'emacron@president.gouv.fr');
  }
}
