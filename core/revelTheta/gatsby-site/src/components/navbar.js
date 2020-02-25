// import React from 'react';
// import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import data from '../../data/contact';
// yellow bar with gmaps link, favicons for social
const Nav = () => (
  <section id="navbar">
    <section id="leftNav">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
    </section>
    <section id="rightNav">
    <Menu/>

      // <Link to="/" className="logo">
      //   <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      // </Link>
      // add social when time comes
      //4 lis with favicon
    </section>
  </section>
);

export default Nav;
