//style 1:
//1. displays sytlized info (w/logos): phone, email, addy
//2. box with gmaps
//style 2:
//Info w/o gmap box instead revel logo and contact us link
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDqdwZBxXF3d1yMKGZanjc87pbGSbTh5hU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

// export default SimpleMap;

const InfoFoot = () => {
  return (<div>
    <div>
      <img alt = ""/>
      <p></p>
    </div>
    <div>
      <img alt = ""/>
      <p></p>
    </div>
    <div>
      <img alt = ""/>
      <p></p>
    </div>
    <div>
          <SimpleMap/>
          </div>
          </div>
        )
};
export default InfoFoot
