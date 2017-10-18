import {Component, Input} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
   @Input() leContactEnDetail: ContactBookContact;

  constructor() {
  }
}
