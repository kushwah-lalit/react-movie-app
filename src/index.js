import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import packages up and file below
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
// ********
// function logger(obj,next,action)
// function logger(obj)(next)(action)
// const logger = function ({dispatch,getState}){
//   return function (next){
//     return function(action){
//       // middleware code
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }
// }
// another form to write the above fucntion
const logger = ({dispatch,getState}) => (next) => (action) =>{
    // middleware code
    if (typeof action !== 'function') {
    console.log('ACTION_TYPE = ',action.type);
    }
    next(action);
}
// const thunk = ({dispatch,getState}) => next => action => {
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }

//   next(action);
// };

// *************
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log('store',store);
// console.log('Before State',store.getState());
// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Man of steel"}]
// });
// console.log('After State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

