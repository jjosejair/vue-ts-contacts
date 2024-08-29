import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/Contact'; 
import apiClient from '../axios';

class ContactService {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  async fetchContacts() {
    const response = await apiClient.get<Contact[]>('/contacts');
    this.contactsSubject.next(response.data);
  }

  async createContact(contact: Contact) {
    const response = await apiClient.post<Contact>('/contacts', contact);
    this.contactsSubject.next([...this.contactsSubject.value, response.data]);
  }

  async updateContact(id: number, updatedContact: Contact) {
    const response = await apiClient.put<Contact>(`/contacts/${id}`, updatedContact);
    const contacts = this.contactsSubject.value.map(contact =>
      contact.id === id ? response.data : contact
    );
    this.contactsSubject.next(contacts);
  }

  async deleteContact(id: number) {
    await apiClient.delete(`/contacts/${id}`);
    const contacts = this.contactsSubject.value.filter(contact => contact.id !== id);
    this.contactsSubject.next(contacts);
  }
}

export const contactService = new ContactService();
