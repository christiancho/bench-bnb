import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const loggedIn = !!this.props.currentUser;
    if ( loggedIn ) {
      return (
        <section className="user-bar">
          <span className="username">{ this.props.currentUser.username }</span>
          <input type="submit" value="Logout" onClick={ this.handleLogout }/>
        </section>
      );
    } else {
      return (
        <section className="user-bar">
          <Link to={ "/signup" }>Sign Up</Link>
          <Link to={ "/login" }>Login</Link>
        </section>
      );
    }
  }

}

export default Greeting;
