import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './reducers';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});
