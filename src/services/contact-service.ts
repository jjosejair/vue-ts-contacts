import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import apiClient from '../axios';

class ContactService {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  fetchContacts(): Promise<void> {
    return apiClient.get<Contact[]>('/contacts').then((response) => {
      this.contactsSubject.next(response.data);
    });
  }

  createContact(contact: Contact): Promise<void> {
    return apiClient.post<Contact>('/contacts', contact).then((response) => {
      this.contactsSubject.next([...this.contactsSubject.value, response.data]);
    });
  }

  updateContact(id: number, updatedContact: Contact): Promise<void> {
    return apiClient.put<Contact>(`/contacts/${id}`, updatedContact).then((response) => {
      const contacts = this.contactsSubject.value.map(contact =>
        contact.id === id ? response.data : contact
      );
      this.contactsSubject.next(contacts);
    });
  }

  deleteContact(id: number): Promise<void> {
    return apiClient.delete(`/contacts/${id}`).then(() => {
      const contacts = this.contactsSubject.value.filter(contact => contact.id !== id);
      this.contactsSubject.next(contacts);
    });
  }
}

export const contactService = new ContactService();