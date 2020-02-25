import Link from 'next/link';
import Header from '../../components/header.js';
import Circles from '../../components/headerc.js';
import Nav from '../../components/navbar.js';
import BarSwitch from '../../components/BarSwitch';
import Head from '.next/head';\
import Carousel from 'react-multi-carousel';
import BoxT from '../../components/boxt.js';
import VenueBox from '../venue.js';
import InfoFoot from '../../components/infofoot.js';
import Footer from '../../components/footer.js';
import "react-multi-carousel/lib/styles.css";

const Responsive = () => {
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

const Index = () => {
  <Nav/>;
  <Header/>;
  //<Circles/>;
  <section class='topHome'>
    <div class = 'heroImage' id='topImageWrapper'>
      <img class = 'heroImage' id ='topImage'/>;
    </div>;
  </section>;
  <section class = 'title'>
    <h2> See what Revel has to offer</h2>;
  <Circles/>;
  </section> ;
    <BarSwitch/>;
  <section class = 'upcomingEvents' Id='carouselEvents'>
    <Carousel responsive={Responsive}>
      <div>Item 1</div>//eventflyers
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>;
  </section>
  <VenueBox/>;
  <section>
    <div>
      <h1 class = 'h1w'> What is</h1><h1 class = 'h1y'> Revel</h1><h1 class = 'h1w'> ?.</h1>;
    </div>;
  <BoxT('food')/>;
  <BoxT('drinks')/>;
  <BoxT('liveMusic')/>;
  </section>;
  <section>
    <div>
      <h1 class = 'h1y'> All Under One Roof.</h1>;
    </div>;
    <InfoFoot/>;
  </section>;
  <section>
    <div>
    <Footer/>;
    </div>;
  </section>;
};
export default Index
