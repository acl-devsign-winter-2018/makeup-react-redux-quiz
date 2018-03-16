import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import Pet from '../components/Pet';
import Pets from '../components/Pets';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;