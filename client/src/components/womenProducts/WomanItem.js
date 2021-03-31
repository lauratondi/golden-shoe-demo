import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WomanItem = ({ woman }) => {
  return (
    <div className='col-sm-3'>
      <div className='card' style={{ width: '20rem' }}>
        <Link to={`/women/${woman._id}`}>
          <img src={woman.image} className='card-img-top' alt='...' />
        </Link>
        <div className='card-body'>
          <div className='card-title'>
            <p>
              {' '}
              <b>{woman.name} </b> €{woman.price}
            </p>
            <div className='user-list'>
              <i className='fas fa-heart fa-lg'></i>
              <i className='fas fa-shopping-bag fa-lg'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WomanItem.propTypes = {
  woman: PropTypes.object.isRequired,
};

export default WomanItem;

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
