// marker for map
import React from 'react'
import { location } from 'sugui/icons'

// const iconStyle = {
//     borderRadius: '100px',
//     boxShadow: '3px 3px 1px #888888'
// }
const CurrentPin = ({text}) => {
   return(
      <div>
        <Icon name="location"
         color='blue'
         size='big'
         style={iconStyle}
        />
        {text}
       </div>
    )
}
export default CurrentPin

const greatPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)'
}

render() {
  return (
    <div style={greatPlaceStyle}>
      {this.props.text}
    </div>
  );
}
createMapOptions: function (maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }

  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)
  // ES5 users
  function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}

  <GoogleMap  onClick={_onClick} ... />
