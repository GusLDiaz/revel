//1.static images
//2. overlaid text
import React from "react"
const VenueBox= () => {
  return (

  <div class = 'venueBox'>
    <img source = './images/venueBlur.png' alt = 'venue background'/>//bg blurred
    <div class = 'venueOverlay'>
      <img source = './images/logoMoot.png' alt ='logo'/>//logo
      <h3>Revel</h3>
      <h3>Venue</h3>
      <h3>Coming Soon</h3>
    <div id = 'overlayText'>
        <p>Here at Revel, we are in the process of constructing a music venue that will hold around 3000 people. This state of the art venue will have multiple bars across 2 levels. Along with a mezzanine, we will have VIP seating areas for you and all your friends.

Stay tuned for more updates on the most exciting place in town. </p>
    </div>
    </div>
  </div>)
};
export default VenueBox
