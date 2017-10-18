import {Component, Input} from '@angular/core';
import {ContactBookContact} from '../contact-book-contact';

@Component({
  selector: 'app-contact-title',
  templateUrl: './contact-title.component.html',
  styleUrls: ['./contact-title.component.css']
})
export class ContactTitleComponent {
  @Input() leContactDuTitre: ContactBookContact;

  constructor() {
  }
}
