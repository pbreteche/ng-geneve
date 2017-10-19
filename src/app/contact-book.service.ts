import {Inject, Injectable} from '@angular/core';
import {ContactBookContact} from './contact-book-contact';
import {API_CONFIG} from './config';

@Injectable()
export class ContactBookService {
  contacts: ContactBookContact[];

  constructor(
    @Inject(API_CONFIG) config
  ) {
    console.debug(config);
    this.contacts = [];
    this.init();
  }

  init() {
    this.contacts.push(new ContactBookContact('François', 'Hollande', 'fhollande@president.gouv.fr'));
    this.contacts.push(new ContactBookContact('Emmanuel', 'Macron', 'emacron@president.gouv.fr'));
    this.contacts.push(new ContactBookContact('Pierre', 'Bretéché', 'pbreteche@president.gouv.fr'));
  }
}
