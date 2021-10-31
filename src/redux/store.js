import { createStore, combineReducers } from 'redux';
import counterReducer from '../redux/counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';
//Для расширения в Хроме (applyMiddleware-'redux', composeWithDevTools-'devtools')
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  counter: counterReducer,
  contacts: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
