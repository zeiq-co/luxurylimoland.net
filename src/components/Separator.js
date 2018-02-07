import React from 'react';
import Link from 'gatsby-link';

const Separator = ({separator, socialLinks}) => (
					<section id="one" className="wrapper style1 special">
						<div className="inner">
							<header className="major">
								<h2>{separator.title}</h2>
								<p>{separator.heading}</p>
							</header>
							<ul className="icons major">
								<li>
									<a href={socialLinks.twitter} target="_blank">
									  <span className="icon fa-twitter major style1"/>
									</a>
								</li>
								<li>
								<a href={socialLinks.facebook} target="_blank">
								<span className="icon fa-facebook major style2"/>
								</a>
								</li>
								<li>
									<a href={socialLinks.instagram} target="_blank">
									<span className="icon fa-instagram major style3"/>
									</a>
								</li>
							</ul>
						</div>
					</section>
);

export default Separator;