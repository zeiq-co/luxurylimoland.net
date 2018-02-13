import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import PageHeading from '../components/PageHeading'

export const AboutPageTemplate = ({ title, content, contentComponent, pageHeading }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet title="About Us | LuxuryLimoLand" />
      <PageHeading pageHeading={pageHeading} />
      <section className="wrapper style3 special">
        <div className="inner">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
    pageHeading={data.site.siteMetadata.AboutPage[0].TopContent}
  />);
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  site{
    siteMetadata{
      AboutPage{
        TopContent{
          title
          description
        }
      }
    }
  }
  }
`;
