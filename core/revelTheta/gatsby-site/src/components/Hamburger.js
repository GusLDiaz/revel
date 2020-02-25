import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu/lib/menus/slide';

// import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hamburger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={open}>
      //load mobilemenu page
        <ul className="hamburger-ul">(
            <li>Eats and drinks</li>,
            <li>Venue</li>,
            <li>About</li>,
            <li>Contact</li>,
        )</ul>;
      </Menu>
    </div>
  );
};

export default Hamburger;
