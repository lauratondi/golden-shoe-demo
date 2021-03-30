import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const ProductItem = ({ product }) => {
  return (
    <div className='col-sm-3'>
      <div className='card' style={{ width: '20rem' }}>
        <img src={product.image} className='card-img-top' alt='...' />
        <div class='card-body'>
          <div class='card-title'>
            <p>
              {' '}
              <b>{product.name} </b> €{product.price}
            </p>
            <div className='user-list'>
              <i class='fas fa-heart fa-lg'></i>
              <i class='fas fa-shopping-bag fa-lg'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;

{
  /* <Card>
      <Card.Img variant='top' src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <div className='cardText'>
            €{product.price}
            <div className='user-list'>
              <i className='fas fa-heart fa-lg'></i>
              <i className='fas fa-shopping-bag fa-lg'></i>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card> */
}
