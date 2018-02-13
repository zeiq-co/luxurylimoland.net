import React from "react";
import Link from "gatsby-link";
import graphql from "graphql";
import Helmet from 'react-helmet';

import PageHeading from '../components/PageHeading';
import config from '../config';

export default class Blogs extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { Posts: pageHeading } = data.site.siteMetadata.BlogsPage[0];

    return (
      <div>
        <Helmet title={`News | ${config.title}`} />
        <PageHeading pageHeading={pageHeading} />
        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <ul className="features">
              {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) =>(
              <li className="icon fa-paper-plane-o" key={post.id}>
                <h3><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link className="button is-small" to={post.frontmatter.path}>
                  Keep Reading →
                </Link>
              </li>
           ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export const blogsPageQuery = graphql`
  query BlogsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  site{
    siteMetadata{
      BlogsPage{
        Posts{
          title
          description
        }
      }
    }
  }
  }
`;
