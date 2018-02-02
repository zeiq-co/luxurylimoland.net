import React from "react";
import Link from "gatsby-link";
import graphql from "graphql";
import PageHeading from '../components/PageHeading'

export default class Blogs extends React.Component {


  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div>
          <PageHeading/>
         <section id="three" className="wrapper style3 special">
         <div className="inner">
          <header className="major">
            <h2>See Our latest post</h2>
            <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
          </header>
          <ul className="features">
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) =>(
            <li className="icon fa-paper-plane-o">
            <h3>{post.frontmatter.title}</h3>
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
  }
`;
