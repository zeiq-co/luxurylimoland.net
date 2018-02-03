module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    IndexPage:[{
     Banner:{
       title:"Luxury Limo Land ",
       heading:"Best Luxury Cars Rental in the Jalandhar, Punjab and Nationwide."
     },
    }],
    BlogsPage:[{
      Posts:{
        title:"Our Latest Posts",
        description:"Best Luxury Cars Rental in the Jalandhar, Punjab and Nationwide."
      },
     }],
     CarsPage:[{
      TopContent:{
        title:"See Our Collection",
        description:"Best Luxury Cars Rental in the Jalandhar, Punjab and Nationwide."
      },
     }],
     AboutPage:[{
      TopContent:{
        title:"Know More About Us",
        description:"Best Luxury Cars Rental in the Jalandhar, Punjab and Nationwide."
      },
     }],  
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keycbEvfGXAQ6ROBz`,
        baseId: `appUjzGbUtHYwEnG6`,
        tableName: `Cars`,
        tableView: `Kanban`
      }
    },
  ],
};
