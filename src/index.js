import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware , compose , combineReducers} from 'redux'
import thunk  from 'redux-thunk'
import {Provider} from 'react-redux'
import nameReducer from './reducer/nameReducer'
import wishReducer from './reducer/wishReducer'

const masterReducer=combineReducers({
   "name": nameReducer,
   "wish": wishReducer
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(masterReducer,{"name": "affan" , "wish": ["hello", "world"]} ,composeEnhancers (applyMiddleware(thunk)));

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
