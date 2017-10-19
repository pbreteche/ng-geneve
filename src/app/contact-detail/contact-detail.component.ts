import {Component, Input} from '@angular/core';
import {Contact} from '../contact';
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

  get leContactEnDetail(): Contact {
    return this.currentContact.contact;
  }

  like() {
    this.likes++;
  }

  sendMessage(recipient: string, value: string) {
    console.info('Message envoyé à ' + recipient, value);
  }
}
