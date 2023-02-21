import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { addContact, deleteContact } from 'redux/actions';
// import contact from './conacts';
// import store from '../redux/store'

const App = () => {
  const contacts = useSelector(store => store.contacts)
  // const [contacts, setContacts] = useState(()=> {
  //   const con = JSON.parse(localStorage.getItem('contacts'))
  //   return con ? con : [...store]
  // });
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  
  useEffect(()=> {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onAddContacts = ({name, number}) => {
    const normilizedName = name.toLowerCase();
    const equalName = contacts.find(({name}) => {
      return (name.toLowerCase() === normilizedName)
    });
    if (equalName) return (alert(equalName.name + ' is already in contacts.'), alert.preventDefault());

      const action = addContact({name, number});
      dispatch(action)
  };

  const changeFilter = ({target}) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({name}) => {
      return (name.toLocaleLowerCase().includes(normalizedFilter))
    })
    return result;
  };

  const deleteContacts = (id) => {
    const action = deleteContact(id);
    dispatch(action);
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
          contacts={getVisibleContacts()}
          onDelete={deleteContacts}
        />
      ) : (
        <p>No contacts yet</p>
      )}
    </Container>
  );
}

export default App;
