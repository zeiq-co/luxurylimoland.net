import React from 'react';
import Link from 'gatsby-link';

const Banner = ({banner}) => (
  <section id="banner" style={{backgroundImage:"/assets/banner.jpg"}}>
		<div className="inner">
			<h2>{banner.title}</h2>
			<p>{banner.heading}<br/>
			</p>
			<ul className="actions">
				<li><a href="#" className="button special">Book Now </a></li>
			</ul>
		</div>
		<a href="#one" className="more scrolly">Learn More</a>
	</section>

);

export default Banner;