import React from 'react';
import { Link } from 'react-router-dom';
import GoldenShoeLogo from '../../img/GoldenShoeLogo.png';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      role='navigation'
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img
            src={GoldenShoeLogo}
            alt='logo'
            width='50'
            height='auto'
            className='d-inline-block align-text-center'
          />
          Golden Shoe
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link active' aria-current='page' to='/women'>
              Women
            </Link>
            <Link className='nav-link' to='#'>
              Men
            </Link>
            <Link className='nav-link' to='#'>
              About
            </Link>
            <Link className='nav-link' to='#'>
              Contact
            </Link>
            <Link className='nav-link' to='#'>
              {' '}
              <i className='fas fa-heart fa-lg'></i>
            </Link>
            <Link className='nav-link' to='#'>
              <i className='fas fa-shopping-bag fa-lg'></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
