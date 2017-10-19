import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavigationComponent } from './contact-navigation/contact-navigation.component';
import { ContactSendMailComponent } from './contact-send-mail/contact-send-mail.component';
import {FormsModule} from '@angular/forms';
import {ContactBookService} from './contact-book.service';
import {API_CONFIG} from './config';
import {contactBookServiceFactory} from './contact-book-service.factory';

@NgModule({
  declarations: [
    AppComponent,
    ContactTitleComponent,
    ContactDetailComponent,
    ContactNavigationComponent,
    ContactSendMailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ContactBookService,
//    { provide: ContactBookService, useClass: ContactBookService },
//    { provide: ContactBookService, useValue: new ContactBookService() },
    { provide: API_CONFIG, useValue: API_CONFIG },
//     {
//       provide: ContactBookService,
//       useFactory: contactBookServiceFactory,
//       deps: [API_CONFIG]
//     },
//     { provide: ContactBookService, useExisting: AutreService}
  ],
  bootstrap: [AppComponent]
})
export class ContactBookModule { }
