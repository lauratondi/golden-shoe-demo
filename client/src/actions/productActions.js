import axios from 'axios';
import { SET_LOADING, GET_PRODUCTS, GET_PRODUCT, PRODUCT_ERROR } from './types';

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
  try {
    const res = await axios.get(`api/products/${id}`);

    console.log(res.data);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
      loading: false,
    });
  } catch (err) {
    dispatch({
      payload: { status: err.response.status },
    });
  }
};
// Set Loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
