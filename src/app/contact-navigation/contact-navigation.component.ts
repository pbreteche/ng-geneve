import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';
import {ContactBookService} from '../contact-book.service';
import {CurrentContactService} from '../current-contact.service';

@Component({
  selector: 'app-contact-navigation',
  templateUrl: './contact-navigation.component.html',
  styleUrls: ['./contact-navigation.component.css']
})
export class ContactNavigationComponent implements OnInit {

  constructor(
    private contactBook: ContactBookService,
    private currentContact: CurrentContactService
  ) { }

  ngOnInit() {
  }

  get contacts(): ContactBookContact[] {
    return this.contactBook.contacts;
  }

  selectContact(contact: ContactBookContact) {
    this.currentContact.contact = contact;
  }
}
