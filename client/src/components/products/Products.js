import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, setLoading } from '../../actions/productActions';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Spinner from '../layout/Spinner';
import ProductCarouselItem from '../products/ProductCarouselItem';

const Products = ({ getProducts, setLoading, products, loading }) => {
  useEffect(() => {
    getProducts();
    setLoading();
    // eslint-disable-next-line
  }, [getProducts]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Fragment>
      <div className='text-page'>
        <h5>New Collections</h5>
      </div>
      {loading && products !== null ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <Carousel responsive={responsive}>
            {products.length > 0
              ? products.map((product, index) => (
                  <ProductCarouselItem key={index} product={product} />
                ))
              : null}
          </Carousel>
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
