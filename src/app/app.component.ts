import { Component } from '@angular/core';
import {ContactBookContact} from './contact-book-contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: ContactBookContact[];
  currentContact: ContactBookContact;

  constructor() {
    this.contacts = [];
    this.init();
  }

  init() {
    this.contacts.push(new ContactBookContact('François', 'Hollande', 'fhollande@president.gouv.fr'));
    this.contacts.push(new ContactBookContact('Emmanuel', 'Macron', 'emacron@president.gouv.fr'));
    this.contacts.push(new ContactBookContact('Pierre', 'Bretéché', 'pbreteche@president.gouv.fr'));
    this.currentContact = this.contacts[0];
  }

  changeCurrentContact(newSelectedContact: ContactBookContact) {
    this.currentContact = newSelectedContact;
  }
}
