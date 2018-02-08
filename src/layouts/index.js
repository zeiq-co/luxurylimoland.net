import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | LuxuryLimoLand">
         <meta charSet="utf-8" />
          <meta httpEquiv="content-language" content="en-in" />
          <meta httpEquiv="content-language" content="en-us" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
          />
          <meta
            name="keywords"
            content="rent a car, wedding car, luxury car rental, luxury car rental, car rental Jalandhar, wedding car rental, wedding car hire, luxury car on rent."
          />
          <meta
            name="description"
            content="Luxury Limo Land Wedding Cars In Punjab are committed to providing you the finest quality luxury wedding cars and service available in Punjab."
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="og:description"
            content="Luxury Limo Land Wedding Cars In Punjab are committed to providing you the finest quality luxury wedding cars and service available in Punjab."
          />
          <meta name="twitter:card" content="luxurylimoLand" />
          <meta name="twitter:site" content="@luxurylimoland" />
          <meta
            name="twitter:title"
            content="luxury limo land luxury cars rental company"
          />
          <meta
            name="twitter:description"
            content="Luxury Limo Land Wedding Cars In Punjab are committed to providing you the finest quality luxury wedding cars and service available in Punjab."
          />
          <meta
            name="twitter:image"
            content="https://pbs.twimg.com/profile_images/708322796300972033/sf7Kf9Da_400x400.jpg"
          />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
