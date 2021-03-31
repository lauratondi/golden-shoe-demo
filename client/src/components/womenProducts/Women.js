import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWomenProducts, setLoading } from '../../actions/productActions';
import WomanItem from './WomanItem';
import Filters from '../filters/Filters';
import getType from '../filters/Filters';
const Women = ({ getWomenProducts, setLoading, women, loading }) => {
  useEffect(() => {
    getWomenProducts();
    setLoading();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const onChange = (e) => setText(e.target.value);

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
      .filter((woman) => {
        var type = woman.type;
        return type;
      });
    if (!this.type) {
      return women;
    }

    return filteredType;
  };

  const filteredShoes = () => {
    return women.filter((woman) => {
      return (
        (text
          ? woman.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
          : true) &&
        (typeFilter.length > 0
          ? filterByType([women]).filter(
              (woman) => typeFilter.indexOf(woman) !== -1
            ).lenght > 0
          : true)
      );
    });
  };

  console.log(filteredShoes());
  return (
    <Fragment>
      <div className='text-page'>
        <h5>Women</h5>
        <Fragment>
          <Filters />
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
              ? filteredShoes().map((woman, index) => (
                  <WomanItem key={index} woman={woman} />
                ))
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
