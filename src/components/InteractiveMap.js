import React, { Component } from 'react';
import {Circle as LeafletElement} from 'leaflet';
import { Map, TileLayer, Marker, Popup, Polygon, Circle } from "react-leaflet";
import { computeDestinationPoint, getAreaOfPolygon } from 'geolib';

function computeRadius (size) {
  //return Math.sqrt(size*10000.00)/2.00
  return Math.sqrt(size*10000.00 / Math.PI)
}

function computePolygon (lat, lng, size){


  /*
  console.log("lat, lng, size", lat, lng, size)
  const len = Math.sqrt(size*10000.00)/2.00
  const pointNorth = computeDestinationPoint(
      { latitude: lat, longitude: lng },
      len,
      0
  );
  const point1 = computeDestinationPoint(
      pointNorth,
      len,
      90
  );
  const point2 = computeDestinationPoint(
      point1,
      len*2,
      180
  );
  const point3 = computeDestinationPoint(
      point2,
      len*2,
      270
  );
  const point4 = computeDestinationPoint(
      point3,
      len*2,
      0
  );
  const polygon = [[point1.latitude, point1.longitude], [point2.latitude, point2.longitude],
  [point3.latitude, point3.longitude], [point4.latitude, point4.longitude]]
*/
  //console.log("points", JSON.stringify(point))


/*
  let polygon = []
  console.log("lat, lng, size", lat, lng, size)
  const len = Math.sqrt(size*10000.00)/2.00

  let angle = 45;
  let angleRad = 45.00*Math.PI/180.00
  const hypot = len / (Math.cos(angleRad))
  console.log("length, hypot", len, hypot)
  console.log("angle", angle)
  for (let i = 0; i < 4; i++){
    const point = computeDestinationPoint(
        { latitude: lat, longitude: lng },
        hypot,
        angle
    );
    polygon.push([point.latitude, point.longitude]);
    console.log("POINT", JSON.stringify(point))
    angle = angle + 90;
  }
  console.log("POLYGON", JSON.stringify(polygon))
*/
/*
  const areaCheck = getAreaOfPolygon(polygon)
  console.log("initial size: ", size, "polygon size:", areaCheck/10000)
  return polygon
*/
}

export default class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: 8,
      size: this.props.size,
      polygon: computePolygon(this.props.lat, this.props.lng, this.props.size),
      radius: computeRadius(this.props.size)
    }
  }

  componentDidMount(){
    console.log("radius", this.state.radius);
    const bounds1 = this.refs.map.leafletElement.getBounds();
    if (this.refs.circle && this.refs.circle.leafletElement) {
      const bounds2 = this.refs.circle.leafletElement.getBounds();
      console.log("BOUNDS", bounds2);
    }
    console.log("BOUNDS", bounds1)
    //        <Polygon color="purple" positions={this.state.polygon} />

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if ((this.props.lat !== prevProps.lat) || (this.props.lng !== prevProps.lng) || (this.props.size !== prevProps.size)) {
      this.setState({
        lat: this.props.lat,
        lng: this.props.lng,
        size: this.props.size,
        radius: computeRadius(this.props.size),
        zoom: 8
      });
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map ref='map' center={position} zoom={this.state.zoom}>
      <Circle ref='circle' center={[this.state.lat, this.state.lng]} fillColor="blue" radius={this.state.radius} />
        <TileLayer
          attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

      </Map>
    )
  }
}
