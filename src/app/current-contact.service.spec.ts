import { TestBed, inject } from '@angular/core/testing';

import { CurrentContactService } from './current-contact.service';

describe('CurrentContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentContactService]
    });
  });

  it('should be created', inject([CurrentContactService], (service: CurrentContactService) => {
    expect(service).toBeTruthy();
  }));
});
