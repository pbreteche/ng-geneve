import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavigationComponent } from './contact-navigation/contact-navigation.component';
import { ContactSendMailComponent } from './contact-send-mail/contact-send-mail.component';
import {FormsModule} from '@angular/forms';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class ContactBookModule { }
