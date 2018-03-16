import { createStore, combineReducers, compose } from 'redux';
import { loading, error } from '../components/app/reducers';
import { pets } from '../components/pets/reducers';

const reducer = combineReducers({
  loading,
  error,
  pets
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers
);

export default store;