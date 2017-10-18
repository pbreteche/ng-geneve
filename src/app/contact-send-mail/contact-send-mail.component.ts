import { Component } from '@angular/core';

class Mail {
  recipient: string;
  sender: string;
  object: string;
  body: string;
  cc: string[];
}

@Component({
  selector: 'app-contact-send-mail',
  templateUrl: './contact-send-mail.component.html',
  styleUrls: ['./contact-send-mail.component.css']
})
export class ContactSendMailComponent{
  mail = new Mail();

  constructor() { }

  sendMail() {
    console.info(this.mail);
    this.mail = new Mail();
  }

}
