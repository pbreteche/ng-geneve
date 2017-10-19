import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
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

  get contacts(): Contact[] {
    return this.contactBook.contacts;
  }

  selectContact(contact: Contact) {
    this.currentContact.contact = contact;
  }
}
