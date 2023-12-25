import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../types";
import { createContact, fecthAllContacts } from "./contactThunks";
import { RootState } from "../app/store";

interface ContactsState {
  items: Contact[] | null;
  renderLoading: boolean;
  createLoading: boolean;
}
const initialState: ContactsState = {
  items: [],
  renderLoading: false,
  createLoading: false,
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
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectCreateLoading = (state: RootState) =>
  state.contacts.createLoading;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectRenderLoading = (state: RootState) =>
  state.contacts.renderLoading;
