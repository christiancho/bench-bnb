export default class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const marker = this.markers[id];
    this.map.panTo(marker.getPosition());
    marker.infoBox.open(this.map, marker);
    this.closeOtherBoxes(id);
  }

  closeOtherBoxes(openId){
    const markers = Object.assign( {}, this.markers );
    delete markers[openId];
    Object.keys(markers).forEach( id => {
      markers[id].infoBox.close();
    });
  }

  _benchesToAdd(benches){
    const newBenches = Object.assign( {}, benches );
    Object.keys(newBenches).forEach( id => {
      if ( this.markers[id] !== undefined ) delete newBenches[id];
    });
    return Object.values(newBenches);
  }

  _createMarkerFromBench(bench){
    const coords = { lat: bench.lat, lng: bench.lng };
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: bench.description
    });
    marker.id = bench.id;
    marker.infoBox = new google.maps.InfoWindow({
      content: marker.title
    });
    marker.addListener('click', this.handleClick.bind(null, marker.id));
    this.markers[bench.id] = marker;
  }

  _markersToRemove(benches){
    const markersToRemove = Object.assign( {}, this.markers );
    Object.keys(markersToRemove).forEach( id => {
      if ( benches[id] !== undefined ) delete markersToRemove[id];
    });
    return Object.values(markersToRemove);
  }

  _removeMarker(marker){
    marker.setMap(null);
    delete this.markers[marker.id];
  }

  updateMarkers(benches) {
    const benchesToAdd = this._benchesToAdd(benches);
    benchesToAdd.forEach( bench => this._createMarkerFromBench(bench) );

    const markersToRemove = this._markersToRemove(benches);
    markersToRemove.forEach( marker => this._removeMarker(marker) );

  }

}
