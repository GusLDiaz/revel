//style 1:
//1. displays sytlized info (w/logos): phone, email, addy
//2. box with gmaps
//style 2:
//Info w/o gmap box instead revel logo and contact us link
import React from 'react';
import GoogleMapReact from 'google-map-react';
//import CurrentPin from './marker.js'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
// <CurrentPin
//   lat={this.props.current.lat}
//   lng={this.props.current.lng}
//   text={'You'}
// />
// class RevelMap extends React.Component {
//   loadMap() {
//     if (this.props && this.props.revelmap) {
//       // google is available
//       const {revelmap} = this.props;
//       const maps = revelmap.maps;
//     }
//     // ...
//   }
// }

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 35.13,
      lng: -106.62
    },
    zoom: 11
};
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '35%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDqdwZBxXF3d1yMKGZanjc87pbGSbTh5hU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.134690}
            lng={-106.615970}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

// export default SimpleMap;

const InfoFoot = () => {
  //render()
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
          <SimpleMap text={"revel"}/>
          </div>
          </div>
)};
export default InfoFoot
