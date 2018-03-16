import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import Home from '../components/Home';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  // listed reducers
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