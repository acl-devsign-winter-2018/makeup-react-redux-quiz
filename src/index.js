import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
// import './styles/main.css';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);