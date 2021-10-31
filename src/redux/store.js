import { createStore, combineReducers } from 'redux';
import counterReducer from '../redux/counter/counter-reducer';
//Для расширения в Хроме (applyMiddleware-'redux', composeWithDevTools-'devtools')
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
