export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCT';
export const DELETE_PRODUCT = 'PRODUCTS/DELETE_PRODUCT';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
};

export const removeProduct = productId => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId,
    },
  };
};
