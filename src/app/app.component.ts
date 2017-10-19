import { Component } from '@angular/core';
import {ContactBookContact} from './contact-book-contact';
import {ContactBookService} from './contact-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentContact: ContactBookContact;

  constructor(public contactBook: ContactBookService) {
    this.currentContact = this.contactBook.contacts[0];
  }

  changeCurrentContact(newSelectedContact: ContactBookContact) {
    this.currentContact = newSelectedContact;
  }
}
