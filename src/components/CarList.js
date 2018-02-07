import React from 'react';

const CarList = ({carItems}) => (
  <section id="two" className="wrapper alt style2">
  {carItems.map(data => {
    // console.log('dddd', data.node.image)
    return (
     <section className="spotlight" id="spotlight">
       {data.node.image !== null && <div className="image"><img src={data.node.image[0].url} alt="" /></div>}
       <div className="content">
         <h2>{data.node.name}</h2>
         <p>{data.node.description}</p>
         <ul className="actions">
				<li>
          <a href="https://luxurylimoland.com" className="button special">Book Now </a>
        </li>
			</ul>
       </div>
     </section>
);
  })}
 </section>

);

export default CarList;