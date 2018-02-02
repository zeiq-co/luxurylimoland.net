import React from 'react';
import { IndexPageTemplate } from '../../templates/about-page';

const IndexPagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default IndexPagePreview;
