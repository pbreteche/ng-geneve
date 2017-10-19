import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    return {
      contacts: [
        { id: 0, firstName: 'François', lastName: 'Hollande', email:'fhollande@president.gouv.fr'},
        { id: 1, firstName: 'Emmanuel', lastName: 'Macron', email:'emacron@president.gouv.fr'},
        { id: 2, firstName: 'Pierre', lastName: 'Bretéché', email:'pbreteche@president.gouv.fr'},
      ]
    }
  }
}
