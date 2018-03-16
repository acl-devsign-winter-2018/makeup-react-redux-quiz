import { createStore, combineReducers } from 'redux';
import { loading, error } from '../components/app/reducers';
import { pets } from '../components/pets/reducers';

const reducer = combineReducers({
  loading,
  error,
  pets
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;