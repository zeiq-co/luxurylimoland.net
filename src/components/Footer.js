import React from 'react';
import Link from 'gatsby-link';

const Footer = ({posts}) => (
<footer id="footer">
<ul className="icons">
  <li><Link to="/" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
  <li><Link to="/" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
  <li><Link to="/" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
  <li><Link to="/" className="icon fa-dribbble"><span className="label">Dribbble</span></Link></li>
  <li><Link to="/" className="icon fa-envelope-o"><span className="label">Email</span></Link></li>
</ul>
<ul className="copyright">
  <li>© Untitled</li><li>Design: <Link to="http://html5up.net">HTML5 UP</Link></li>
</ul>
</footer>

);

export default Footer;