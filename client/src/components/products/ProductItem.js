import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return <div>{product.name ? <p>{product.name}</p> : null}</div>;
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
