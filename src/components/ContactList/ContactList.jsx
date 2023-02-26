import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { useSelector, useDispatch } from 'react-redux';



function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.contacts.map(({ id, name, number }, idx) => (
        <ContactListItem
          onDelete={deleteContacts}
          name={name}
          number={number}
          id={id}
          key={id}
          idx={idx}
        />
      ))}
    </List>
  );
}




export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
};
