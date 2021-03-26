import axios from 'axios';
import { SET_LOADING, GET_PRODUCTS } from './types';

// GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios.get('/api/products');

    console.log(res.data);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
      loading: false,
    });
  } catch (err) {
    // dispatch({
    //   payload: { status: err.response.status },
    // });
    console.log('No getting prodcts');
  }
};

// Set Loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
