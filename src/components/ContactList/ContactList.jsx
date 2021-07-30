import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getError,
  getLoading,
  getFilteredContacts,
} from '../../redux/contacts/contacts-selectors';
import { getContacts } from '../../redux/contacts/contacts-operations';
import ContactListItem from '../ContactListItem/ContactListItem';
import Spinner from '../Spinner';
import Notification from '../Notification/Notification';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={styles.ContactList}>
      <h3 className={styles.ContactList__title}>Contact List</h3>
      {loading && <Spinner />}

      {error && <Notification message={error} />}

      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
