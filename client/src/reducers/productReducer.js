import { SET_LOADING, GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

const initialState = {
  products: [],
  product: {},
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
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
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
