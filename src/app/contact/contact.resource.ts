import { Injectable } from '@angular/core';
import { HttpService } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ContactResource {
  constructor(private httpService: HttpService) { }

  getAllContacts(successMessage, errorMessage) {
    return this.httpService.get('', successMessage, errorMessage, true);
  }
  updateContact(data, successMessage, errorMessage) {
    return this.httpService.put('/' + data._id, data, successMessage, errorMessage, true);
  }
  insertContact(data, successMessage, errorMessage) {
    return this.httpService.post('', data, successMessage, errorMessage, true);
  }
}
