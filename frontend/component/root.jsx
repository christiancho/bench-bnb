import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SesssionFormContainer from './session_form_container';
import { clearErrors } from '../actions/session_actions';


const Root = ({ store }) => {

  const _onSessionEnter = (nextState, replace) => {
    store.dispatch(clearErrors());
    if ( store.getState().session.currentUser ) replace("/");
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>

          <Route
            path="/login"
            onEnter={ _onSessionEnter }
            component={ SesssionFormContainer }
          />

          <Route
            path="/signup"
            onEnter={ _onSessionEnter }
            component={ SesssionFormContainer }
          />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
