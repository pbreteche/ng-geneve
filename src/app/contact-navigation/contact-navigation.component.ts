import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';

@Component({
  selector: 'app-contact-navigation',
  templateUrl: './contact-navigation.component.html',
  styleUrls: ['./contact-navigation.component.css']
})
export class ContactNavigationComponent implements OnInit {

  @Input() contacts: ContactBookContact[];
  @Output() contactSelected = new EventEmitter<ContactBookContact>();

  constructor() { }

  ngOnInit() {
  }

  selectContact(contact: ContactBookContact) {
    this.contactSelected.emit(contact);
  }
}
