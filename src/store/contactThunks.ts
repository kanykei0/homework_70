import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "../types";
import axiosApi from "../axiosApi";

export const createContact = createAsyncThunk<void, Contact>(
  "contacts/create",
  async (contact) => {
    await axiosApi.post("/contacts.json", contact);
  }
);
