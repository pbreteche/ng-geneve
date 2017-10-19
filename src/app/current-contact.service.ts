import { Injectable } from '@angular/core';
import {ContactBookContact} from './contact-book-contact';
import {ContactBookService} from './contact-book.service';

@Injectable()
export class CurrentContactService {

  private _contact: ContactBookContact;

  constructor(private contactBook: ContactBookService) {
    this._contact = contactBook.contacts[0];
  }

  get contact(): ContactBookContact {
    return this._contact;
  }

  set contact(contact: ContactBookContact) {
    if (this.contactBook.contacts.indexOf(contact) == -1) {
      throw `Ne peut être contact courrant, il n'est pas dans la liste`
    }
    this._contact = contact;

    console.log('new current contact', contact, this._contact);
  }

}
