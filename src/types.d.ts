export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export type ContactMutation = Omit<Contact, "id">;

export interface ContactList {
  [id: string]: Contact;
}
