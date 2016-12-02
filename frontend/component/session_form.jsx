import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property){
    return event => this.setState({ [property]: event.target.value });
  }

  componentDidMount(){
    if ( this.props.loggedIn ) {
      this.props.router.push("/");
    }
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.router.location.key !==
      nextProps.router.location.key) {
        this.props.clearErrors();
      }
  }

  handleSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push("/"));
  }

  errorList(property) {
    if ( this.props.errors[property] === undefined ) return undefined;
    return this.props.errors[property].map( ( err, index ) => {
      return <li key={ index }>{ property + " " + err }</li>;
    });
  }

  render() {
    const otherLinkText = ( this.props.formType === "Sign Up") ? "Login" : "Sign Up";
    const otherLinkURL = ( otherLinkText === "Sign Up" ) ? "/signup" : "/login";

    return(
      <section className="session-form">

        <form onSubmit={ this.handleSubmit }>

          <input
            type="text"
            value={ this.state.username }
            placeholder="Username"
            className="session-input"
            onChange={ this.update("username") }
          />
        <ul className="errors">
            { this.errorList("username") }
          </ul>

          <input
            type="password"
            value={ this.state.password }
            placeholder="Password"
            className="session-input"
            onChange={ this.update("password") }
          />
          <ul className="errors">
            { this.errorList("password") }
          </ul>

          <input
            type="submit"
            value={ this.props.formType }
          />
          <ul className="messages">
            <li>{ this.props.errors.message }</li>
          </ul>
        </form>

        <Link to={ otherLinkURL }>{ otherLinkText }</Link>

      </section>
    );
  }

}

export default SessionForm;
