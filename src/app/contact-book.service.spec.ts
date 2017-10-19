import { TestBed, inject } from '@angular/core/testing';

import { ContactBookService } from './contact-book.service';

describe('ContactBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactBookService]
    });
  });

  it('should be created', inject([ContactBookService], (service: ContactBookService) => {
    expect(service).toBeTruthy();
  }));
});
