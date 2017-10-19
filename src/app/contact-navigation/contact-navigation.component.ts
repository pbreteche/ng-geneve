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
  public contacts: Contact[] = [];

  constructor(
    private contactBook: ContactBookService,
    private currentContact: CurrentContactService
  ) { }

  ngOnInit() {
    this.contactBook.getContacts().then(
      contacts =>  this.contacts = contacts
    )
  }


  selectContact(contact: Contact) {
    this.currentContact.contact = contact;
  }
}
