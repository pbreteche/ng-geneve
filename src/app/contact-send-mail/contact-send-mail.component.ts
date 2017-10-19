import { Component } from '@angular/core';

class Mail {
  recipient: string;
  sender: string;
  object: string;
  body: string;
  cc: string[] = [];

}

@Component({
  selector: 'app-contact-send-mail',
  templateUrl: './contact-send-mail.component.html',
  styleUrls: ['./contact-send-mail.component.css']
})
export class ContactSendMailComponent{
  mail = new Mail();
  newCarbonCopy: string;

  constructor() { }

  sendMail() {
    console.info(this.mail);
    this.mail = new Mail();
  }

  addCarbonCopy() {
    this.mail.cc.push(this.newCarbonCopy);
    this.newCarbonCopy = '';
  }

  trackByIndex(index: number, dish: string){
    return index;
  }
  removeCarbonCopy(i: number) {
    this.mail.cc.splice(i, 1);
  }
}
