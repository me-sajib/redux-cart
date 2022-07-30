export const ADD_TO_CART = "ADD_CART";
export const REMOVE_TO_CART = "REMOVE_CART";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    id: id,
  };
};
