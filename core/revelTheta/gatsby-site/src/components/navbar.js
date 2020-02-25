// import React from 'react';
import { Link } from "gatsby";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react"
// import data from '../../data/contact';
// yellow bar with gmaps link, favicons for social
const Nav = () => (
  <section id="navbar">
    <section id="leftNav">
      <Link to="/" className="logo">
        <img src={`/images/me_icon.jpg`} alt="" />
      </Link>
    </section>
    <section id="rightNav">
    </section>
  </section>
);

export default Nav;
