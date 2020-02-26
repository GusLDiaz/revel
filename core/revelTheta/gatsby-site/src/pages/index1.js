import React from "react"
import { Link } from "gatsby";

import Header from '../components/header.js';
import Circles from '../components/headerc.js';
import Nav from '../components/navbar.js';
import Carousel from 'react-multi-carousel';
import BoxT from '../components/boxt.js';
import VenueBox from '../components/venueBox.js';
import InfoFoot from '../components/infofoot.js';
import Footer from '../components/footer.js';

import Layout from "../components/layout"
//import Layout from 'gatsby-theme-massively/src/components/layout'
//import Image from "../components/image"
import SEO from "../components/seo"
import BarSwitch from '../components/barSwitch';
//const defaultProps = consolelog(this.props)

const IndexPage = () => (
    //<Layout location={this.props.location}>
  <Layout>
    <SEO title="Home" />,
     <Nav/>,
    <div>
      <h1>See What Revel Has to Offer</h1>
      <p>Welcome to your new Gatsby</p>
      <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src ="./images/bg2.png" alt= '' />
    </div>
    <Link to="/About/">Go to page 2</Link></div>,
  <section class='topHome'>
    <div class = 'heroImage' id='topImageWrapper'>
      <img class = 'heroImage' id ='topImage' source = "./images/bg.jpg" />;
    </div>;
  </section>,
  <section class = 'title'>
    <h2> See what Revel has to offer</h2>;
  </section>,
    <BarSwitch/>,
  <section class = 'upcomingEvents' Id='carouselEvents'>
    <Carousel responsive={responsive}>
      <div><img src= './images/venueBlur.png' alt='' /> Item 1</div>//eventflyers
      <div><img src= './images/venueBlur.png' alt='' /> Item 2</div>
      <div><img src= './images/venueBlur.png' alt='' /> Item 3</div>
      <div><img src= './images/venueBlur.png' alt='' /> Item 4</div>
    </Carousel>;
  </section>,
  <VenueBox/>,
  <section>
    <div>
      <h1 class = 'h1w'> What is</h1><h1 class = 'h1y'> Revel</h1><h1 class = 'h1w'> ?.</h1>;
    </div>;
  </section>,
  <section id= "InfoFoot">
    <div>
      <h1 class = 'h1y'> All Under One Roof.</h1>;
    </div>,
    <InfoFoot/>,
  </section>,
  <section id= 'footer'>
    <div>
    <Footer/>
    </div>
  </section>
 </Layout>
);
export default IndexPage

//import client from '../client'
  // <InfoFoot/>;
//import "react-multi-carousel/lib/styles.css";//maybe
// <BoxT('food')/>;
// <BoxT('drinks')/>;
// <BoxT('liveMusic')/>;
  // <Circles/>;
const responsive  = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },

};
//const Index = (props) => {
// <Nav />;
// <Header />;
// <Circles />;


// Index.getInitialProps = async function(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query
//   return await client.fetch(`
//     *[(_type == "post" || _type == "movie") && slug.current == $slug][0]
//   `, { slug })
// }
// export default Index
