import React from 'react';
import Link from 'gatsby-link';

const Separator = ({separator, soicalLinks}) => (
					<section id="one" className="wrapper style1 special">
						<div className="inner">
							<header className="major">
								<h2>{separator.title}</h2>
								<p>{separator.heading}</p>
							</header>
							<ul className="icons major">
								<li>
									<Link to={soicalLinks.twitter}>
									  <span className="icon fa-twitter major style1"/>
									</Link>
								</li>
								<li>
								<Link>
								<span className="icon fa-facebook major style2"/>
								</Link>
								</li>
								<li>
									<Link>
									<span className="icon fa-instagram major style3"/>
									</Link>
								</li>
							</ul>
						</div>
					</section>
);

export default Separator;