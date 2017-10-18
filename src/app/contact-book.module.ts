import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavigationComponent } from './contact-navigation/contact-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTitleComponent,
    ContactDetailComponent,
    ContactNavigationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ContactBookModule { }
