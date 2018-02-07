import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import Banner from "../components/Banner"
import CarList from '../components/CarList'
import Separator from '../components/Separator'
export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: carItems } = data.allAirtable;
    const { Banner: banner } = data.site.siteMetadata.IndexPage[0];
    const { Separator: separator } = data.site.siteMetadata.IndexPage[0];
    const { SocialLinks: socialLinks } = data.site.siteMetadata;
    console.log("separator", separator);

    return (
        <div id="main">
          <Banner banner={banner}/>
          <Separator separator={separator} socialLinks={socialLinks}/>
          <CarList carItems={carItems}/>
         <section id="three" className="wrapper style3 special">
         <div className="inner">
          <header className="major">
            <h2>See Our latest post</h2>
          </header>
          <ul className="features">
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) =>(
            <li className="icon fa-paper-plane-o" key={post.frontmatter.id}>
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

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } limit: 4) {
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
      SocialLinks {
        twitter
        facebook
        instagram
      }
      IndexPage{
        Banner{
          title
          heading
        }
        Separator{
          title
          heading
        }
      }
    }
  }
  allAirtable{
    edges{
      node{
        name
        description
        carUrl
        image{
          url
        }
      }
    }
}
  }
`;
