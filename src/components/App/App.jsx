
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';

const App = () => {
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm/>
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter/>
        {contacts.contacts.length ? (
          <ContactList/>
        ) : (
          <p>No contacts yet</p>
        )}
      </Container>
  );
}

export default App;
