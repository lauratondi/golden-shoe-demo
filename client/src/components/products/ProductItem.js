import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

const ProductItem = ({ product }) => {
  return (
    <div>
      <img className='d-block w-100' src={product.image} alt='img' />
      {/* <Carousel.Caption> */}
      <p className='product-info'>
        <b>{product.type}</b>
        {} €{product.price}
      </p>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
