import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.ContactList__item}>
      <p className={styles.ContactList__name}>{name}</p>
      <p className={styles.ContactList__phone}>{number}</p>

      <IconContext.Provider
        value={{
          color: 'inherit',
          size: '1.2rem',
          className: 'global-class-name',
          title: 'delete',
        }}
      >
        <div onClick={() => dispatch(deleteContact(id))}>
          <MdDelete className={styles.ContactList__icon} />
        </div>
      </IconContext.Provider>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // .string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContactListItem;
