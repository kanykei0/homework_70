import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, ContactList } from "../types";
import axiosApi from "../axiosApi";

export const createContact = createAsyncThunk<void, Contact>(
  "contacts/create",
  async (contact) => {
    await axiosApi.post("/contacts.json", contact);
  }
);

export const fecthAllContacts = createAsyncThunk<Contact[], undefined>(
  "contacts/fetch",
  async () => {
    const response = await axiosApi.get<ContactList | null>("/contacts.json");
    const contacts = response.data;
    let newContacts: Contact[] = [];

    if (contacts) {
      newContacts = Object.keys(contacts).map((key) => {
        const contact = contacts[key];
        return {
          ...contact,
          id: key,
        };
      });
    }

    return newContacts;
  }
);
