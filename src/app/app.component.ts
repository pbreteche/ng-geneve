import { Component } from '@angular/core';
import {ContactBookContact} from './contact-book-contact';
import {ContactBookService} from './contact-book.service';
import {CurrentContactService} from './current-contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CurrentContactService
  ]
})
export class AppComponent {
}
