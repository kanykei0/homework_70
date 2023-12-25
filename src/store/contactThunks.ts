import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, ContactList, ContactMutation } from "../types";
import axiosApi from "../axiosApi";

export const createContact = createAsyncThunk<void, ContactMutation>(
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

export const deleteContact = createAsyncThunk<void, string>(
  "contacts/delete",
  async (id: string) => {
    await axiosApi.delete(`/contacts/${id}.json`);
  }
);

export const fetchOneContact = createAsyncThunk<ContactMutation, string>(
  "contacts/edit",
  async (id: string) => {
    const response = await axiosApi.get<ContactMutation | null>(
      `/contacts/${id}.json`
    );
    const contact = response.data;

    if (contact === null) {
      throw new Error("Not Found");
    }

    return contact;
  }
);

interface UpdateContactParams {
  id: string;
  contact: ContactMutation;
}

export const updateContact = createAsyncThunk<void, UpdateContactParams>(
  "dishes/update",
  async ({ id, contact }) => {
    await axiosApi.put(`/contacts/${id}.json`, contact);
  }
);
