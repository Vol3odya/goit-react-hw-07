import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import {nameFilters} from "./filtersSlice"

export const liContacts = (state) => state.contacts.items;

const slise = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => { 
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
             })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
             }).addCase(addContact.pending, (state) => { 
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
             })
            .addCase(addContact.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(deleteContact.pending, (state) => { 
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id!==action.payload);
                state.loading = false;
             })
            .addCase(deleteContact.rejected, (state) => {
                state.error = true;
                state.loading = false;
             })
    }

});



export default slise.reducer;



export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector([liContacts, nameFilters], (contacts, filter) => { 
    if (filter == "") {
        return contacts;
    }
    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});