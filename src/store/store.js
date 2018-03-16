import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


// combine reducer
const reducer = combineReducers({
 
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
    ) 
  ));


export default store;