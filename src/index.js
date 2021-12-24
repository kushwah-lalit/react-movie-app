// import React, { createContext } from 'react';
import React from 'react';
// no need of createContext
import { Provider } from 'react-redux';
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
        // ************* NO USE OF WRITING THE CONTEXT AND CONNET AS WE HAVE PRE CODED TO USE FROM react-redux
                              // export const StoreContext = createContext();
                              // console.log('StoreContext', StoreContext);

                              // class Provider extends React.Component {
                              //   render() {
                              //     const { store } = this.props;
                              //     return (
                              //       <StoreContext.Provider value={store}>
                              //         {this.props.children}
                              //       </StoreContext.Provider>
                              //     );
                              //   }
                              // }
                        // we can do like this also
                        // ReactDOM.render(
                        //   <StoreContext.Provider value={store}>
                        //     <App/>
                        //   </StoreContext.Provider>,
                        //   document.getElementById('root')
                        // );


                        // ***** Writing the connect function here

                        // const connectedComponent = connect(callback)(App);
                                // export function connect(callback) {
                                //   // curring as coonect returns functions
                                //   return function (Component) {
                                //     // need to wrap this clas in another as store from context is used outside the render
                                //     class ConnectedComponent extends React.Component {
                                //       constructor(props) {
                                //         // subscribing each component to the store to re render on update...so whole thing doesnt
                                //         super(props);
                                //         this.unsubscribe = this.props.store.subscribe(() => {
                                //           this.forceUpdate();
                                //         });
                                //       }

                                //       componentWillUnmount() {
                                //         this.unsubscribe();
                                //       }
                                //       render() {
                                //         // taking store from props
                                //         const { store } = this.props;
                                //         const state = store.getState();
                                //         const dataToBeSentAsProps = callback(state);
                                //         // getting required state from the callback
                                //         // send the state data in props also dispatch by deafcult
                                //         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
                                //       }
                                //     }
                                // // wrapper
                                //     class ConnectedComponentWrapper extends React.Component {
                                //       render() {
                                //         return (
                                //           <StoreContext.Consumer>
                                //             {/* function to access the store from consumer */}
                                //             {(store) => {
                                //               return <ConnectedComponent store={store} />;
                                //             }}
                                //           </StoreContext.Consumer>
                                //         );
                                //       }
                                //     }
                                //     return ConnectedComponentWrapper;
                                //   };
                                // }

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);