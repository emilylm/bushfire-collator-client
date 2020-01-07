import React, { Component } from 'react';
import {Circle as LeafletElement} from 'leaflet';
import { Map, TileLayer, Marker, Popup, Polygon, Circle, FeatureGroup } from "react-leaflet";
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
      zoom: 1,
      size: this.props.size,
      maxSize: this.props.maxSize,
      maxRadius: computeRadius(this.props.maxSize),
      polygon: computePolygon(this.props.lat, this.props.lng, this.props.size),
      radius: computeRadius(this.props.size)
    }
    this.onFeatureGroupAdd = this.onFeatureGroupAdd.bind(this);
  }


  onFeatureGroupAdd = () => {
    let bounds = this.refs.circle.leafletElement.getBounds()
    bounds.getSouthWest().wrap();
    bounds.getNorthEast().wrap()
    this.refs.map.leafletElement.fitBounds(bounds);
  }

  /*
  let bounds = this.refs.circle.leafletElement.getBounds()
  bounds.getSouthWest().wrap();
  bounds.getNorthEast().wrap();
  let zoom = this.refs.map.leafletElement.getBoundsZoom(bounds);
  console.log("ZOOM", zoom);
  this.refs.map.leafletElement.setZoom(zoom);
  console.log("BOUNDS", bounds);*/

  componentDidUpdate(prevProps) {
    if ((this.props.size !== prevProps.size)) {
      this.setState({
        size: this.props.size,
        radius: computeRadius(this.props.size),
      });
      this.onFeatureGroupAdd()
    }
  }

  /*
  Alternative to re-rendering on key change..

  componentDidUpdate(prevProps) {
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
  */

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map ref='map' zoomSnap={0.1} center={position} zoom={this.state.zoom}>
      <FeatureGroup ref="features" onAdd={this.onFeatureGroupAdd}>
        <Circle ref="circle" key={this.props.maxSize} center={[this.state.lat, this.state.lng]} fillColor="transparent" color="transparent" radius={this.state.maxRadius} />
        <Circle key={this.props.size} center={[this.state.lat, this.state.lng]} fillColor="red" color="red" radius={this.state.radius} />
      </FeatureGroup>
        <TileLayer
          attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

      </Map>
    )
  }
}
