import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product._id}`}>
        <img className='d-block w-100' src={product.image} alt='img' />
        {/* <Carousel.Caption> */}
        <p className='product-info'>
          <b>{product.type}</b>
          {} €{product.price}
        </p>
      </Link>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
