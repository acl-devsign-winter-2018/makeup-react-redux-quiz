import { createStore, combineReducers, compose } from 'redux';
import { loading, error } from '../components/app/reducers';
import { projects } from '../components/projects/reducers';

const reducer = combineReducers({
  loading,
  error,
  projects
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers
);

export default store;