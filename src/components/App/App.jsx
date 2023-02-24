
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { getFilter } from 'redux/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
// import contact from './conacts';
// import store from '../redux/store'

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onAddContacts = ({ name, number }) => {
    const normilizedName = name.toLowerCase();
    const equalName = contacts.find(({ name }) => {
      return (name.toLowerCase() === normilizedName)
    });
    if (equalName) return (alert(equalName.name + ' is already in contacts.'), alert.preventDefault());

    dispatch(addContact({ name, number }))
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };


  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={onAddContacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={contacts}
            onDelete={deleteContacts}
          />
        ) : (
          <p>No contacts yet</p>
        )}
      </Container>
  );
}

export default App;
