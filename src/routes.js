import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

export const routes = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: HomePage,

    privateRoute: false,
    restricted: false,
  },
  {
    path: '/contacts',
    title: 'Contacts',
    exact: true,
    component: ContactsPage,

    privateRoute: true,
    restricted: false,
  },
  {
    path: '/login',
    title: 'Login',
    exact: true,
    component: LoginPage,

    privateRoute: false,
    restricted: true,
  },
  {
    path: '/registration',
    title: 'Registration',
    exact: true,
    component: RegistrationPage,

    privateRoute: false,
    restricted: true,
  },
];
