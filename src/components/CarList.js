import React from 'react';
import Link from 'gatsby-link';

const CarList = ({carItems}) => (
  <section id="two" className="wrapper alt style2">
  {carItems.map(data => {
    console.log('dddd', data.node.image)
    return (
     <section className="spotlight">
       {data.node.image !== null && <div className="image"><img src={data.node.image[0].url} alt="" /></div>}
       <div className="content">
         <h2>{data.node.name}<br />
         sed ullamcorper</h2>
         <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
       </div>
     </section>
);
  })}
 </section>

);

export default CarList;