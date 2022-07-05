import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';
import { initialState } from './store';
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };

    default:
      return state;
  }
};
