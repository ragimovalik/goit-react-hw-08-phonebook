import axios from 'axios';
import toast from 'react-hot-toast';
import * as actions from './contacts-actions';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(actions.getContactsSuccess(response.data));
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.getContactsError(error.message));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const response = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(response.data));
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.addContactError(error.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.deleteContactError(error.message));
  }
};
