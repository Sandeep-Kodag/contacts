import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contacts';

  constructor(private contactService: ContactService) { }
  contacts: Contact[];
  ngOnInit() {
    this.getAllContacts();
  }
  getAllContacts() {
    this.contactService.getAllContacts().subscribe((data: any) => {
      const contacts = data;
      this.contacts = contacts.filter((con: Contact) => con.status);
    });
  }
  addContact() {

  }
  editContact(item: Contact) {
    //this.contactService.updateContact().subscribe((data: any) => {
    //  this.contacts = data;
    // });
  }
  deleteContact(item: Contact) {
    //this.contactService.deleteContact().subscribe((data: any) => {
    // this.contacts = data;
    //});
  }

}
