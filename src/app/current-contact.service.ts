import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {ContactBookService} from './contact-book.service';

@Injectable()
export class CurrentContactService {

  private _contact: Contact;

  constructor(private contactBook: ContactBookService) {
    this._contact = contactBook.contacts[0];
  }

  get contact(): Contact {
    return this._contact;
  }

  set contact(contact: Contact) {
    if (this.contactBook.contacts.indexOf(contact) == -1) {
      throw `Ne peut être contact courrant, il n'est pas dans la liste`
    }
    this._contact = contact;

  }
}
