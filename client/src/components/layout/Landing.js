import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/Products';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const Landing = ({ loading }) => {
  return (
    <Fragment>
      <div class='bg-landing'>
        <h3>Catchy Phrase</h3>
      </div>
      <div class='text-page'>
        <h5>New Collections</h5>
      </div>
      <Products />
    </Fragment>
  );
};

Landing.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
});

export default connect(mapStateToProps)(Landing);
