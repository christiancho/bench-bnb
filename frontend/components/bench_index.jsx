import React from 'react';

class BenchIndex extends React.Component {

  componentDidMount() {

  }

  render() {
    const benches = Object.values(this.props.benches).map( ( bench, index ) => {
      return( <li key={ index }>{ bench.description }</li> );
    });
    return (
      <ul>
      </ul>
    );
  }

}

export default BenchIndex;
