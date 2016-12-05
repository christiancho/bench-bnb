import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      description: "",
      seating: 0,
      lat: this.props.lat,
      lng: this.props.lng,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBench(this.state).then(
      data => console.log(data),
      data => console.log(data)
    ).then( () => this.props.router.push("/") );
  }

  update(property){
    return (event) => this.setState({ [property]: event.target.value });
  }

  render() {

    return(
      <form onSubmit={ this.handleSubmit } className="bench-form">

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={ this.state.description }
          onChange={ this.update("description") }
          className="bench-input"
        />

        <label htmlFor="seating">Number of seats</label>
        <input
          type="text"
          id="seating"
          value={ this.state.seating }
          onChange={ this.update("seating") }
          className="bench-input"
        />

        <label htmlFor="description">Latitude</label>
        <input
          type="text"
          id="description"
          value={ this.state.lat }
          className="bench-input"
          disabled
        />

        <label htmlFor="description">Longitude</label>
        <input
          type="text"
          id="description"
          value={ this.state.lng }
          className="bench-input"
          disabled
        />

        <input type='submit' value='Create Bench'/>

      </form>
    );
  }

}

export default withRouter(BenchForm);
