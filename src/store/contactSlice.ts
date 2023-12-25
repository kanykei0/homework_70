import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface ContactsState {
  items: Contact[] | null;
}
const initialState: ContactsState = {
  items: null,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const contactsReducer = contactSlice.reducer;
