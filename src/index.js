import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//import packages up and file below
import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log('store',store);
console.log('State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

