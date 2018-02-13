import React from 'react';
import config from '../config';

const CarList = ({carItems}) => (
  <section id="two" className="wrapper alt style2">
    {carItems.map(data => {
      // console.log('dddd', data.node.image)
      if (data.node.name === null || data.node.name.length < 1) {
        return <span key={data.node.id} />;
      }

      return (
        <section className="spotlight" id="spotlight" key={data.node.id}>
          {data.node.image !== null && <div className="image"><img src={data.node.image[0].url} alt="" /></div>}
          <div className="content">
            <h2>{data.node.name}</h2>
            <p>{data.node.description}</p>
            <ul className="actions">
              <li>
                <a href={`${data.node.carUrl}?ref=${config.siteUrl}`} className="button special">Book Now</a>
              </li>
            </ul>
          </div>
        </section>
      );
    })}
  </section>

);

export default CarList;