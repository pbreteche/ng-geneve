import {Component, Input} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';
import {CurrentContactService} from '../current-contact.service';

@Component({
  selector: 'app-contact-title',
  templateUrl: './contact-title.component.html',
  styleUrls: ['./contact-title.component.css']
})
export class ContactTitleComponent {

  constructor(private currentContact: CurrentContactService) { }

  get leContactDuTitre() {
    return this.currentContact.contact;
  }
}
