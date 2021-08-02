import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as actions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(actions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(actions.registerSuccess(response.data));

    toast.success('Your are joined to the Phonebook');
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.registerError(error.message));
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));

    toast.success('Welcome! You are logged in');
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(actions.logoutSuccess());

    toast.success('See you later :)');
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(actions.getCurrentRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(actions.getCurrentSuccess(response.data));
  } catch (error) {
    toast.error(error.message);

    dispatch(actions.getCurrentError(error.message));
  }
};
