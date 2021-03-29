import React, { Fragment } from 'react';
import Products from '../products/Products';

const Landing = () => {
  return (
    <Fragment>
      <div className='bg-landing'>
        <h3>Catchy Phrase</h3>
      </div>
      <div className='text-page'>
        <h5>New Collections</h5>
      </div>

      <Products />
    </Fragment>
  );
};

export default Landing;
