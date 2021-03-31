import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWomenProducts, setLoading } from '../../actions/productActions';
import WomanItem from './WomanItem';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Women = ({ getWomenProducts, setLoading, women, loading }) => {
  useEffect(() => {
    getWomenProducts();
    setLoading();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='text-page'>
        <h5>Women</h5>
      </div>
      {loading && women !== null ? (
        <p>Loading...</p>
      ) : (
        <div className='cards'>
          <div className='row'>
            {women.length > 0
              ? women.map((woman, index) => (
                  <WomanItem key={index} woman={woman} />
                ))
              : null}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Women.propTypes = {
  getWomenProducts: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  women: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  women: state.products.women,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getWomenProducts, setLoading })(
  Women
);
