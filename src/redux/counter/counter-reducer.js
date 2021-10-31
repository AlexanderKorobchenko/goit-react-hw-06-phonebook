import { combineReducers } from 'redux';
import actions from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actions.INCREMENT:
      return state + payload;
    case actions.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = 1, { actions }) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
