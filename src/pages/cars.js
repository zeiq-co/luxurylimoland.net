import React from "react";
import Helmet from 'react-helmet';
import graphql from "graphql";

import PageHeading from '../components/PageHeading'
import CarList from '../components/CarList'

export default class Cars extends React.Component {

  render() {
    const { data } = this.props;
    const { TopContent: pageHeading } = data.site.siteMetadata.CarsPage[0];

    return (
      <div>
        <Helmet title="Cars | LuxuryLimoLand" />
        <PageHeading pageHeading={pageHeading} />
        <section  className=" style3 special">
          <div className="inner">
            <CarList carItems={data.allAirtable.edges} />
          </div>
        </section>
      </div>
    );
  }
}

export const CarPageQuery = graphql`
  query CarsQuery {
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
  site{
      siteMetadata{
        CarsPage{
          TopContent{
            title
            description
          }
        }
      }
    }
  }
`;
