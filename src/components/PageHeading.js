import React from 'react';
import Link from 'gatsby-link';

const PageHeading = ({pageHeading}) => (

<article id="main">
    <header className="major">
    {/* {pageHeading = !undefined ?(
        <div>
        <h2>See Our latest post</h2>
        <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
        fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
        </div>
            padding-left: 307px;
    padding-right: 307px;
        )
        :
        ( */}
            <div style={{paddingLeft:"307px", paddingRight:"307px"}}>
            <h2>{pageHeading.title}</h2>
            <p>{pageHeading.description}</p>
            </div>

        {/* )} */}
    </header>
</article>
);

export default PageHeading;