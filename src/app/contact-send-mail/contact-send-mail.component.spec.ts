import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSendMailComponent } from './contact-send-mail.component';

describe('ContactSendMailComponent', () => {
  let component: ContactSendMailComponent;
  let fixture: ComponentFixture<ContactSendMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSendMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
