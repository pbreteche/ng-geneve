import {Inject, Injectable} from '@angular/core';
import {Contact} from './contact';
import {API_CONFIG} from './config';

@Injectable()
export class ContactBookService {
  contacts: Contact[];

  constructor(
    @Inject(API_CONFIG) config
  ) {
    console.debug(config);
    this.contacts = [];
    this.init();
  }

  init() {
    this.contacts.push(new Contact('François', 'Hollande', 'fhollande@president.gouv.fr'));
    this.contacts.push(new Contact('Emmanuel', 'Macron', 'emacron@president.gouv.fr'));
    this.contacts.push(new Contact('Pierre', 'Bretéché', 'pbreteche@president.gouv.fr'));
  }
}
