import React from "react";
import Link from "gatsby-link";
import graphql from "graphql";
import Helmet from 'react-helmet';
import Script from 'react-load-script';

import Banner from "../components/Banner";
import CarList from '../components/CarList';
import Separator from '../components/Separator';
import LatestPosts from '../components/LatestPosts';
import config from '../config';

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
    // console.log("posts", posts);

    return (
      <div id="main">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <Helmet title={`Home | ${config.title}`} />
        <Banner banner={banner} />
        <Separator separator={separator} socialLinks={socialLinks} />
        <CarList carItems={carItems} />
        <div  style={{textAlign:"center", padding:"20px"}} >
          <Link to="/cars" className="button special">See more cars</Link>
        </div>
        <LatestPosts posts={posts} />
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
  allAirtable(limit:4){
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
