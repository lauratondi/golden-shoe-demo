import { SET_LOADING, GET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  loading: true,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
