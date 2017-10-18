import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTitleComponent } from './contact-title.component';

describe('ContactTitleComponent', () => {
  let component: ContactTitleComponent;
  let fixture: ComponentFixture<ContactTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
