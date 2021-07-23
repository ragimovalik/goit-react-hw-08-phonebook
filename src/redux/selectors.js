import { createSelector } from '@reduxjs/toolkit';

// === Store design === {contacts: {items, filter, loading, error}}

export const getContactsStore = state => state.contacts;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

const filterContacts = (items, filter) => {
  const normalizedText = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedText),
  );
};

export const getFilteredContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    return filterContacts(contacts, filter);
  },
);
