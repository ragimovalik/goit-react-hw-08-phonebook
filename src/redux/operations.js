import * as actions from './actions';

const BASE_URL = 'http://localhost:3001';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    dispatch(actions.getContactsError(error.message));
  }
};

const headers = {
  'Content-Type': 'application/json',
};

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await fetch(`${BASE_URL}/contacts/${contactId}`, {
      method: 'DELETE',
      body: JSON.stringify(contactId),
    });
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};
