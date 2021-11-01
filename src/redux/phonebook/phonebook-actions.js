// import actions from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = value => ({
//   type: actions.ADD,
//   payload: value,
// });
export const addContact = createAction('contacts/Add');

// const deleteContact = value => ({
//   type: actions.DELETE,
//   payload: value,
// });
export const deleteContact = createAction('contacts/Delete');

// const changeFilter = event => ({
//   type: actions.CHANGE,
//   payload: event.target.value,
// });
export const changeFilter = createAction('filter/Change');

// export default { addContact, deleteContact, changeFilter };
