import actions from './counter-types';

export const increment = value => ({
  type: actions.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actions.DECREMENT,
  payload: value,
});
