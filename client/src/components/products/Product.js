import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProduct, setLoading } from '../../actions/productActions';
import Card from 'react-bootstrap/Card';

const Product = ({ getProduct, setLoading, product, loading, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  let history = useHistory();

  if (loading) {
    return <p>loading..</p>;
  } else {
    return (
      <div className='cards'>
        <div className='row'>
          <div className='col-sm'>
            <div className='card' style={{ width: '20rem' }}>
              <img src={product.image} className='card-img-top' alt='...' />
              <div className='card-body'>
                <div className='card-text'>
                  <h5 className='card-title'>{product.name}</h5>
                  <b>Price:</b>€{product.price} <br />
                  <b>Type:</b> {product.type}
                  <br />
                  <b>Size:</b>
                  {product.size} <br />
                  <b>Color:</b>
                  {product.color}
                  <br />
                  <br />
                  {product.description}
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
    );
  }
};
{
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.products.product,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getProduct, setLoading })(Product);
