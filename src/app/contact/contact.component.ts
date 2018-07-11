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
  contact: any;
  contacts: any[];
  searchText: string;
  filteredContacts: any[];
  ngOnInit() {
    this.getAllContacts();
  }
  getAllContacts() {
    this.contactService.getAllContacts().subscribe((data: any) => {
      this.contacts = data;
      this.contacts = this.contacts.filter((con) => con.status);
      this.filteredContacts = this.contacts;
      this.filter();
    });
  }
  insertContact(item) {
    this.contactService.insertContact(item).subscribe((data: any) => {
      this.getAllContacts();
    });
  }

  saveData(item) {
    if (item._id) {
      this.updateContact(item);
    } else {
      this.insertContact(item);
    }
    this.contact = undefined;
  }
  openModal(item) {
    if (item) {
      this.contact = Object.assign({}, item);
    } else {
      this.contact = {
        first_name: '',
        last_name: '',
        email: '',
        phoneno: '',
        status: true
      };
    }
  }
  updateContact(item) {
    this.contactService.updateContact(item).subscribe((data: any) => {
      this.getAllContacts();
    });
  }
  deleteContact(item) {
    item.status = false;
    this.contactService.deleteContact(item).subscribe((data: any) => {
      this.getAllContacts();
    });
  }
  filter() {
    if (this.searchText && this.searchText.length > 0) {
      this.filteredContacts = this.contacts.filter((con) =>
        (
          (con.first_name.search(new RegExp(this.searchText, "i")) > -1) ||
          (con.last_name.search(new RegExp(this.searchText, "i")) > -1) ||
          (con.email.search(new RegExp(this.searchText, "i")) > -1)
        )
      );
    }
    else {
      this.filteredContacts = this.contacts;
    }
  }

}
