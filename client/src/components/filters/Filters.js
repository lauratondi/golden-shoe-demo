import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWomenProducts, setLoading } from '../../actions/productActions';

const Filters = ({ getWomenProducts, setLoading, women, loading }) => {
  useEffect(() => {
    getWomenProducts();
    setLoading();
    // eslint-disable-next-line
  }, []);
  const [typeFilter, setTypeFilter] = useState('');

  const getType = (women) => {
    let typeFilter = women.map((woman) => woman.type);
    typeFilter = typeFilter.filter(
      (el, index) => typeFilter.indexOf(el) === index
    );
    // console.log(typeFilter);
    return typeFilter;
  };

  const onChangeType = (e) => {
    setTypeFilter(e.target.value);
  };

  const filterByType = () => {
    const filteredType = women
      .filter((woman) => {
        return woman.type !== null && woman.type !== undefined;
      })
      // .filter((woman) => {
      //   let type = woman.type;
      //   return typeFilter === type;
      // });
      .filter((woman) => {
        let type = woman.type;
        if (typeFilter) {
          return type === typeFilter;
        }
      });

    if (!typeFilter || typeFilter === 'Select Type') {
      return women;
    }

    return filteredType;
  };

  console.log(filterByType());

  return (
    <div className='filters'>
      <button
        className='btn'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasFilter'
        aria-controls='offcanvasExample'
      >
        Filters
      </button>

      <div
        className='offcanvas offcanvas-start'
        tabindex='-1'
        id='offcanvasFilter'
        aria-labelledby='offcanvasFilterLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasFilterLabel'>
            Filter by:
          </h5>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            Type
          </button>
        </div>
        <div className='offcanvas-body'>
          <div className='dropdown mt-3'>
            <select
              onChange={onChangeType}
              value={typeFilter}
              name='typeFilter'
            >
              <option>Select Type</option>
              {women.length &&
                getType(women).map((typeFilter, index) => (
                  <option key={index} value={typeFilter}>
                    {' '}
                    {typeFilter}
                  </option>
                ))}
            </select>
          </div>
          <div className='dropdown mt-3'>
            <button
              className='btn dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-bs-toggle='dropdown'
            >
              Material
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <li>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  getWomenProducts: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  women: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  women: state.products.women,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getWomenProducts, setLoading })(
  Filters
);
