export interface Contact {
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface ContactList {
  [id: string]: Contact;
}
