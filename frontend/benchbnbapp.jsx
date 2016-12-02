import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import { login } from './actions/session_actions';
import configureStore from './store/store';
import Root from './component/root';

document.addEventListener("DOMContentLoaded", () => {

  let store;

  if ( window.currentUser ) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // Remove after development
  window.store = store;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);

});
