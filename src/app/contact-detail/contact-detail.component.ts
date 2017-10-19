import {Component, Input} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';
import {CurrentContactService} from '../current-contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
   likes = 0;

  constructor(private currentContact: CurrentContactService) {
  }

  get leContactEnDetail(): ContactBookContact {
    return this.currentContact.contact;
  }

  like() {
    this.likes++;
  }

  sendMessage(recipient: string, value: string) {
    console.info('Message envoyé à ' + recipient, value);
  }
}
