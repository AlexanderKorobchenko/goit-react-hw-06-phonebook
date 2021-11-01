import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts =
  JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;

// ---=== Reducer for Contacts ===---

// const itemsReducer = (state = contacts, { type, payload }) => {
//   switch (type) {
//     case actions.ADD:
//       if (state.some(contact => contact.name.includes(payload.name))) {
//         alert(`${payload.name} is already in contacts!`);
//         return state;
//       }

//       const addContacts = [...state, payload];
//       window.localStorage.setItem('contacts', JSON.stringify(addContacts));
//       return addContacts;

//     case actions.DELETE:
//       const deleteContacts = [
//         ...state.filter(contact => contact.id !== payload),
//       ];
//       window.localStorage.setItem('contacts', JSON.stringify(deleteContacts));
//       return deleteContacts;

//     default:
//       return state;
//   }
// };

const addingContacts = (state, { payload }) => {
  if (state.some(contact => contact.name.includes(payload.name))) {
    alert(`${payload.name} is already in contacts!`);
    return state;
  }

  const addContacts = [...state, payload];
  window.localStorage.setItem('contacts', JSON.stringify(addContacts));
  return addContacts;
};

const deletionContacts = (state, { payload }) => {
  const deleteContacts = [...state.filter(contact => contact.id !== payload)];
  window.localStorage.setItem('contacts', JSON.stringify(deleteContacts));
  return deleteContacts;
};

const itemsReducer = createReducer(contacts, {
  [actions.addContact]: addingContacts,
  [actions.deleteContact]: deletionContacts,
});

// ---=== Reducer for Filter ===---

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actions.changeFilter:
//       return payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
