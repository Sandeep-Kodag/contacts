import { Injectable } from '@angular/core';
import { ContactResource } from './contact.resource';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private contactResource: ContactResource) { }

  public getAllContacts() {
    return this.contactResource.getAllContacts('Contacts fetched', 'Error while fetching contacts');
  }
}
