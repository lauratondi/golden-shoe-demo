import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWomenProducts, setLoading } from '../../actions/productActions';
import WomanItem from './WomanItem';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Women = ({ getWomenProducts, setLoading, women, loading }) => {
  useEffect(() => {
    getWomenProducts();
    setLoading();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    getWomenProducts(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  const filterByName = () => {
    return women.filter((woman) => {
      return text
        ? woman.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
        : true;
    });
  };

  return (
    <Fragment>
      <div className='text-page'>
        <h5>Women</h5>
      </div>
      <Fragment>
        <form onSubmit={onSubmit} className='form'>
          <i className='fas fa-search fa-2x'></i>
          <input
            className='formInput'
            type='text'
            name='text'
            placeholder='Search Movies...'
            value={text}
            onChange={onChange}
          />
        </form>
        {/* <div className='buttons'>
          <button
            type='submit'
            value='Search'
            className='btn btn-primary'
            form='form'
            onClick={onSubmit}
          >
            Search
          </button>
        </div> */}
      </Fragment>
      {loading && women !== null ? (
        <p>Loading...</p>
      ) : (
        <div className='cards'>
          <div className='row'>
            {women.length > 0
              ? filterByName(women).map((woman, index) => (
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
  women: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  women: state.products.women,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getWomenProducts, setLoading })(
  Women
);
