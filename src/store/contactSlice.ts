import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../types";
import { createContact } from "./contactThunks";
import { RootState } from "../app/store";

interface ContactsState {
  items: Contact[] | null;
  createLoading: boolean;
}
const initialState: ContactsState = {
  items: null,
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
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectCreateLoading = (state: RootState) =>
  state.contacts.createLoading;
