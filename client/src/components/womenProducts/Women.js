import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { getWomenProducts, setLoading } from '../../actions/productActions';
import WomanItem from './WomanItem';
import Filters from '../filters/Filters';
// import getType from '../filters/Filters';
import { getType } from '../../utils/filtersDetail';

const Women = ({ getWomenProducts, setLoading, women, loading }) => {
  useEffect(() => {
    getWomenProducts();
    setLoading();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);

  const [typeFilter, setTypeFilter] = useState('');
  const onChangeType = (e) => {
    setTypeFilter(e.target.value);
  };

  const filterByName = () => {
    return women.filter((woman) => {
      return text
        ? woman.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
        : true;
    });
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

  // const filteredShoes = () => {
  //   return women.filter((woman) => {
  //     return (
  //       (text
  //         ? woman.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
  //         : true) &&
  //       (typeFilter.length > 0
  //         ? filterByType([women]).filter(
  //             (woman) => typeFilter.indexOf(woman) !== -1
  //           ).lenght > 0
  //         : true)
  //     );
  //   });
  // };

  // console.log(filteredShoes());
  return (
    <Fragment>
      <div className='text-page'>
        <h5>Women</h5>
        <Fragment>
          {/* filters */}
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
              tabIndex='-1'
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
                ></button>
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
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
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
        </Fragment>
        <Fragment>
          <i className='fas fa-search fa-lm'></i>{' '}
          <input
            className='formInput'
            type='text'
            name='text'
            placeholder='Search ...'
            value={text}
            onChange={onChange}
          />
        </Fragment>
      </div>

      {loading && women !== null ? (
        <p>Loading...</p>
      ) : (
        <div className='cards'>
          <div className='row'>
            {women.length > 0
              ? filterByType().map((woman, index) => {
                  return <WomanItem key={index} woman={woman} />;
                })
              : null}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Women.propTypes = {
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
  Women
);
