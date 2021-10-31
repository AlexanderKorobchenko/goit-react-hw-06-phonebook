import actions from './phonebook-types';

export const addContact = value => ({
  type: actions.ADD,
  payload: value,
});

export const deleteContact = value => ({
  type: actions.DELETE,
  payload: value,
});

export const changeFilter = event => ({
  type: actions.CHANGE,
  payload: event.target.value,
});

export const applyFilter = value => ({
  type: actions.APPLY,
  payload: value,
});
