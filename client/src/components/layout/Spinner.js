import React, { Fragment } from 'react';

import spinner from '../../img/index.Images';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        backgroundColor: '$grey-color',
      }}
    />
  </Fragment>
);

export default Spinner;
