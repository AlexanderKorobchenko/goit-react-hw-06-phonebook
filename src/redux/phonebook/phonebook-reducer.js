import { combineReducers } from 'redux';
import actions from './phonebook-types';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts =
  JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;

const itemsReducer = (state = contacts, { type, payload }) => {
  switch (type) {
    case actions.ADD:
      if (state.some(contact => contact.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts!`);
        return state;
      }

      const addContacts = [...state, payload];
      window.localStorage.setItem('contacts', JSON.stringify(addContacts));
      return addContacts;

    case actions.DELETE:
      const deleteContacts = [
        ...state.filter(contact => contact.id !== payload),
      ];
      window.localStorage.setItem('contacts', JSON.stringify(deleteContacts));
      return deleteContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actions.CHANGE:
      return payload;

    // case actions.APPLY:
    //   console.log(state);
    //   return payload.filter(contact =>
    //     contact.name.toLocaleLowerCase().includes(state),
    //   );

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
