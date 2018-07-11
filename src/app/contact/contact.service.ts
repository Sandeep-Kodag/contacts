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
  public updateContact(item) {
    return this.contactResource.updateContact(item, 'Contact updated', 'Error while updating contact');
  }
  public deleteContact(item) {
    return this.contactResource.updateContact(item, 'Contact deleted', 'Error while deleting contact');
  }
  public insertContact(item) {
    return this.contactResource.insertContact(item, 'Contact Saved', 'Error while adding contact');
  }
}
