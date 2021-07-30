import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './auth-actions';

const userInitialState = {
  name: null,
  email: null,
};

const user = createReducer(userInitialState, {
  [actions.registerSuccess]: (state, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => userInitialState,
  [actions.getCurrentSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getCurrentError]: (_, { payload }) => payload,
});

const isLoggedIn = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentSuccess]: () => true,
  [actions.logoutSuccess]: () => false,

  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.logoutError]: () => false,
});

export default combineReducers({
  user,
  isLoggedIn,
  token,
  error,
});
