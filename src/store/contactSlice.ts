import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact, ContactMutation } from "../types";
import {
  createContact,
  fecthAllContacts,
  fetchOneContact,
  updateContact,
} from "./contactThunks";
import { RootState } from "../app/store";

interface ContactsState {
  items: Contact[] | null;
  contact: ContactMutation | null;
  fetchOneloading: boolean;
  renderLoading: boolean;
  createLoading: boolean;
  updateLoading: boolean;
}
const initialState: ContactsState = {
  items: [],
  contact: null,
  fetchOneloading: false,
  renderLoading: false,
  createLoading: false,
  updateLoading: false,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createContact.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createContact.rejected, (state) => {
      state.createLoading = false;
    });
    builder.addCase(fecthAllContacts.pending, (state) => {
      state.renderLoading = true;
    });
    builder.addCase(fecthAllContacts.fulfilled, (state, { payload: items }) => {
      state.renderLoading = false;
      state.items = items;
    });
    builder.addCase(fecthAllContacts.rejected, (state) => {
      state.renderLoading = false;
    });
    builder.addCase(fetchOneContact.pending, (state) => {
      state.fetchOneloading = true;
    });
    builder.addCase(
      fetchOneContact.fulfilled,
      (state, { payload: contact }: PayloadAction<ContactMutation | null>) => {
        state.fetchOneloading = false;
        state.contact = contact;
      }
    );
    builder.addCase(fetchOneContact.rejected, (state) => {
      state.fetchOneloading = false;
    });
    builder.addCase(updateContact.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateContact.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateContact.rejected, (state) => {
      state.updateLoading = false;
    });
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectContact = (state: RootState) => state.contacts.contact;
export const selectCreateLoading = (state: RootState) =>
  state.contacts.createLoading;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectRenderLoading = (state: RootState) =>
  state.contacts.renderLoading;
export const selectFetchOneContactLoading = (state: RootState) =>
  state.contacts.fetchOneloading;
export const selectUpdateContactLoading = (state: RootState) =>
  state.contacts.updateLoading;
