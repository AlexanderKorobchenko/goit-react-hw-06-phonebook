// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';

//Для расширения в Хроме (applyMiddleware-'redux', composeWithDevTools-'devtools')
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   contacts: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
