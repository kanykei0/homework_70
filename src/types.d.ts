export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface ContactMutation {
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface ContactList {
  [id: string]: Contact;
}
