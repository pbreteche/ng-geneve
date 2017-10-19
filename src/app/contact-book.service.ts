import {Inject, Injectable} from '@angular/core';
import {Contact} from './contact';
import {API_CONFIG} from './config';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactBookService {

  constructor(
    @Inject(API_CONFIG) config,
    private http: Http
  ) {
  }

  getContacts(): Promise<Contact[]> {
    return this.http.get(API_CONFIG.url)
      .toPromise()
      .then(response =>
        response.json().map(
          // assign data to Contact objects
          data => Object.assign(new Contact(), data)
        )
      )
      .catch(error => console.error(error));
  }
}
