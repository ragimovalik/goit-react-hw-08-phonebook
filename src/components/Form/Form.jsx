import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdRemove } from 'react-icons/md';
import { addContact } from '../../redux/contacts/contacts-operations';
import InputBox from '../InputBox/InputBox';
import styles from './Form.module.css';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { IconContext } from 'react-icons/lib';

/*
 <IconContext.Provider
        value={{
          color: 'inherit',
          size: '1.2rem',
          className: 'global-class-name',
          title: 'delete',
        }}
      >
        <div
          onClick={() => {
            console.log('delete button');
            return dispatch(deleteContact(id));
          }}
        >
          <MdDelete className={styles.ContactList__icon} />
        </div>
      </IconContext.Provider>
*/

const Form = () => {
  const [localState, setLocalState] = useState({ name: '', number: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const setDefault = () =>
    setLocalState({
      name: '',
      number: '',
    });

  const onInputChange = ({ target: { name, value } }) => {
    return setLocalState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const contactsChecker = name => {
    return items?.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = localState;

    const newContact = { name, number };

    contactsChecker(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(newContact));

    setDefault();
  };

  const onAddFormShow = () => setShowAddForm(prevState => !prevState);

  return (
    <div className={styles.Form__wrap}>
      <div className={styles.Wrapper__box}>
        <h3 className={styles.Form__title}>Add Contact</h3>
        <IconContext.Provider
          value={{
            color: 'inherit',
            size: '1.2rem',
            className: 'global-class-name',
          }}
        >
          <button className={styles.Add__btn} onClick={onAddFormShow}>
            {showAddForm ? <MdRemove /> : <MdAdd />}
          </button>
        </IconContext.Provider>
      </div>
      {showAddForm && (
        <form className={styles.Form} onSubmit={handleSubmit}>
          <InputBox
            labelText={'Name'}
            htmlFor={'name'}
            type={'text'}
            id={'name'}
            name={'name'}
            title={
              "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            }
            pattern={'text'}
            placeholder={'Name'}
            required={true}
            value={localState.name}
            onChange={onInputChange}
          />

          <InputBox
            labelText={'Phone number'}
            htmlFor={'tel'}
            type={'tel'}
            id={'tel'}
            name={'number'}
            title={
              'Номер телефона должен состоять из 11-12 цифр и может содержать цифры, точки, пузатые скобки и может начинаться с +'
            }
            pattern={'phone'}
            placeholder={'Phone Number'}
            required={true}
            value={localState.number}
            onChange={onInputChange}
          />
          <button className={styles.Form__btn} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
