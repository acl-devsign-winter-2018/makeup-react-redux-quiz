import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { pet } from '../components/pet/reducers';

// combine reducer
const reducer = combineReducers({
  pet
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer
);


export default store;

// ,
//   composeEnhancers(
//     applyMiddleware(
//     ) 