
import {ContactNavigationComponent} from './contact-navigation/contact-navigation.component';
import {ContactSendMailComponent} from './contact-send-mail/contact-send-mail.component';
import {ContactCreateComponent} from './contact-create/contact-create.component';

export const RoutesServices = [
  { path: 'contacts', component: ContactNavigationComponent },
  { path: 'mailbox', component: ContactSendMailComponent },
  { path: 'contacts/new', component: ContactCreateComponent }
];
