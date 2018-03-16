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
  {
    pets: [
      {
        name: 'Dingo',
        id: 111,
        animal: 'dog',
        description: 'the nicest one'
      },
      {
        name: 'Dagger',
        id: 112,
        animal: 'dog',
        description: 'the second nicest one'
      },
      {
        name: 'Telulah',
        id: 113,
        animal: 'rat',
        description: 'ratty'
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;