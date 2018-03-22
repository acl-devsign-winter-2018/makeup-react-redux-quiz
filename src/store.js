import { createStore } from 'redux';
import { pets } from './components/pets/reducer';

const store = createStore(
  pets,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;