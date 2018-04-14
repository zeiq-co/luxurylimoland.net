import React from 'react';
import Link from 'gatsby-link';
import config from '../config';

const Navbar = () => (
  <header id="header" className="alt">

    <Link to="/"><span className="logo">{config.title}</span></Link>

    <nav id="nav">
      <ul>
        <li className="special">
          <a href="#menu" className="menuToggle"><span>Menu</span></a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  Pages
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
