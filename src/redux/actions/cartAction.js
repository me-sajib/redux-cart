export const ADD_TO_CART = "ADD_CART";
export const REMOVE_TO_CART = "REMOVE_CART";

export const addToCart = (id, name) => {
  return {
    type: ADD_TO_CART,
    id: id,
    name,
  };
};

export const removeToCart = (id, name) => {
  return {
    type: REMOVE_TO_CART,
    id: id,
    name,
  };
};
