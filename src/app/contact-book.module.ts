import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavigationComponent } from './contact-navigation/contact-navigation.component';
import { ContactSendMailComponent } from './contact-send-mail/contact-send-mail.component';
import {ContactBookService} from './contact-book.service';
import {API_CONFIG} from './config';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {RouterModule} from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import {RoutesServices} from './routes.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactTitleComponent,
    ContactDetailComponent,
    ContactNavigationComponent,
    ContactSendMailComponent,
    ContactCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RoutesServices),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
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
