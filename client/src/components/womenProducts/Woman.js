import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getWomenProduct, setLoading } from '../../actions/productActions';
import Card from 'react-bootstrap/Card';

const Woman = ({ getWomenProduct, setLoading, woman, loading, match }) => {
  useEffect(() => {
    getWomenProduct(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  let history = useHistory();

  if (loading) {
    return <p>loading..</p>;
  } else {
    return (
      <Fragment>
        <div className='cards'>
          <div className='row'>
            <div className='col-sm'>
              <div className='card' style={{ width: '20rem' }}>
                <img src={woman.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <div className='card-text'>
                    <h5 className='card-title'>{woman.name}</h5>
                    <b>Price:</b> €{woman.price} <br />
                    <b>Type:</b> {woman.type}
                    <br />
                    <b>Size:</b> {woman.size} <br />
                    <b>Material:</b> {woman.material} <br />
                    <b>Color:</b> {woman.color}
                    <br />
                    <br />
                    {woman.description}
                  </div>
                  <div className='user-list'>
                    <i className='fas fa-heart fa-lg'></i>
                    {}
                    {}
                    <i className='fas fa-shopping-bag fa-lg'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='back'>
          <button
            type='button'
            className='btn'
            onClick={() => history.goBack()}
          >
            <i className='fas fa-arrow-circle-left fa-2x'></i>
            {/* <br />
            Back */}
          </button>
        </div>
      </Fragment>
    );
  }
};

Woman.propTypes = {
  woman: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getWomenProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  woman: state.products.woman,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getWomenProduct, setLoading })(Woman);
