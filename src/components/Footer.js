import React from 'react';
import config from '../config';

const Footer = () => (
  <footer id="footer" style={{background:"#34b2a5"}}>
    <ul className="copyright">
      <li><strong>Telephone: <a href={`tel:${config.telephone}`}>{config.telephone}</a></strong></li>
      <li><strong>Email:  <a href={`mailto:${config.email}`}>{config.email}</a></strong> </li>
    </ul>
    <ul className="copyright">
      <li><strong>©2018 {config.title}</strong> </li>
    </ul>
  </footer>

);

export default Footer;