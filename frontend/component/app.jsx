import React from 'react';
import GreetingContainer from './greeting_container';
import { Link, withRouter } from 'react-router';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <Link to={ "/" }><h1>Bench BnB</h1></Link>
        <GreetingContainer />
      </header>
      { children }
    </div>
  );
};

export default withRouter(App);
