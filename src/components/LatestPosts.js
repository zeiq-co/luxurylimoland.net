import React from 'react';
import Link from "gatsby-link";

const CarList = ({posts}) => (
  <section id="three" className="wrapper style3 special">
    <div className="inner">
      <header className="major">
        <h2>See Our Latest Post</h2>
      </header>
      <ul className="features">
        {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) =>(
              <li className="icon fa-paper-plane-o" key={post.id}>
                <h3><Link href={post.frontmatter.path}>{post.frontmatter.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link className="button is-small" to={post.frontmatter.path}>
                   Keep Reading →
                </Link>
              </li>
           ))}
      </ul>
      <Link to="/blogs" className="button special">See More post</Link>
    </div>
  </section>

);

export default CarList;