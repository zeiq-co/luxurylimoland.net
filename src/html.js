import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html lang="en">
    <head>
      {headComponents}
      <link rel="stylesheet" href="/assets/css/main.css" />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
      <script src="/assets/js/jquery.min.js" />
      <script src="/assets/js/jquery.scrollex.min.js" />
      <script src="/assets/js/jquery.scrolly.min.js" />
      <script src="/assets/js/skel.min.js" />
      <script src="/assets/js/util.js" />
      <script src="/assets/js/main.js" />
    </body>
  </html>
);

Html.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default Html;
