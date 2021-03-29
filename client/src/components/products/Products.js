import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, setLoading } from '../../actions/productActions';
import Spinner from '../layout/Spinner';
import ProductItem from '../products/ProductItem';

const Products = ({ getProducts, setLoading, products, loading }) => {
  useEffect(() => {
    getProducts();
    setLoading();
    // eslint-disable-next-line
  }, [getProducts]);

  return (
    <Fragment>
      {loading && products !== null ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <div>
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))
            ) : (
              <p>No product found</p>
            )}
          </div>
          {/* <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner'>
            

            <div class='carousel-item active'>
              <img
                src='./img/pexels-dương-nhân-3155234.jpg'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-md-block'>
                <p>
                  <b>Flat</b>
                </p>
                <p>€ 150</p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});

export default connect(mapStateToProps, {
  getProducts,
  setLoading,
})(Products);
