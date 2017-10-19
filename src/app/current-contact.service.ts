import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {ContactBookService} from './contact-book.service';

@Injectable()
export class CurrentContactService {

  private _contact: Contact;

  constructor(private contactBook: ContactBookService) {
    this._contact = new Contact('Anne', 'O\'Nyme', 'anonyme@example.com');

    this.contactBook.getContacts().then(
      contacts => this._contact = contacts[0]
    );
  }

  get contact(): Contact {
    return this._contact;
  }

  set contact(contact: Contact) {
    this._contact = contact;
  }
}
