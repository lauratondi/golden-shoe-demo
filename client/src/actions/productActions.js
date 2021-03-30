import axios from 'axios';
import {
  SET_LOADING,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_WOMENPRODUCTS,
  PRODUCT_ERROR,
} from './types';

// GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios.get('/api/products/');

    console.log(res.data);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
      loading: false,
    });
  } catch (err) {
    console.log('Error');
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response,
    });
  }
};

// GET single product
export const getProduct = (id) => async (dispatch) => {
  setLoading();
  try {
    const res = await axios.get(`/api/products/${id}`);

    console.log(res.data);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response,
    });
  }
};

// GET WOMEN PRODUTCS
export const getWomenProducts = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios.get('/api/women/');

    console.log(res.data);

    dispatch({
      type: GET_WOMENPRODUCTS,
      payload: res.data,
      loading: false,
    });
  } catch (err) {
    console.log('Error');
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response,
    });
  }
};

// Set Loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
