import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {

  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.761918, lng: -73.982018 },
      zoom: 12
    };

    this.sendNewBounds = this.sendNewBounds.bind(this);
    this.generateBenchForm = this.generateBenchForm.bind(this);

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.map.addListener('idle', this.sendNewBounds);
    this.map.addListener('click', this.generateBenchForm);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  sendNewBounds(){
    const mapBounds = this.map.getBounds();
    const newBounds = {
      northEast: { lat: mapBounds.f.b, lng: mapBounds.b.f },
      southWest: { lat: mapBounds.f.f, lng: mapBounds.b.b }
    };
    this.props.updateBounds(newBounds);
  }

  generateBenchForm(data){
    const coords = {
      lat: data.latLng.lat(),
      lng: data.latLng.lng()
    };
    this.props.router.push({
      pathname: 'benches/new',
      query: coords
    });
  }

  componentWillReceiveProps(newProps){
    this.MarkerManager.updateMarkers(newProps.benches);
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    );
  }

}

export default withRouter(BenchMap);
