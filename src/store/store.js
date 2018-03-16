import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { pet } from '../components/pet/reducers';
import promiseMiddleware from './promiseMiddleware';

// combine reducer
const reducer = combineReducers({
  pet
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    ) 
  )
);


export default store;

// ,
//   composeEnhancers(
//     applyMiddleware(
//     ) 